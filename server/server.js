import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Simple In-Memory / File Storage for Contact Messages
const messagesFile = path.join(__dirname, 'messages.json');

// Initialize messages file if not present
if (!fs.existsSync(messagesFile)) {
  fs.writeFileSync(messagesFile, JSON.stringify([], null, 2));
}

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Simple rate limit helper
const ipRequests = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// Contact Submission Route
app.post('/api/contact', (req, res) => {
  try {
    const ip = req.ip || req.connection.remoteAddress || 'unknown';
    const now = Date.now();

    // Rate limiting check
    const userTimestamps = ipRequests.get(ip) || [];
    const recentRequests = userTimestamps.filter(t => now - t < RATE_LIMIT_WINDOW);

    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please wait a minute before submitting again.'
      });
    }

    recentRequests.push(now);
    ipRequests.set(ip, recentRequests);

    const { name, email, subject, message } = req.body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid name (at least 2 characters).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a message (at least 5 characters).'
      });
    }

    const newMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: name.trim(),
      email: email.trim(),
      subject: (subject && subject.trim()) || 'New Portfolio Contact Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString(),
      ip: ip
    };

    // Save message locally
    try {
      const existingData = fs.readFileSync(messagesFile, 'utf8');
      const messages = JSON.parse(existingData || '[]');
      messages.push(newMessage);
      fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
    } catch (fsErr) {
      console.error('File write error:', fsErr);
    }

    console.log(`[Contact Form] Received message from ${newMessage.name} (${newMessage.email})`);

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received successfully. Rohit will get back to you shortly.',
      data: {
        id: newMessage.id,
        createdAt: newMessage.createdAt
      }
    });
  } catch (error) {
    console.error('Error handling contact message:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again or reach out directly via email.'
    });
  }
});

// Start Server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Contact API server running at http://localhost:${PORT}`);
  });
}

export default app;
