const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// Helper to encode ASCII85
function encodeAscii85(buf) {
  let result = '';
  let i = 0;
  while (i < buf.length) {
    let chunk = buf.slice(i, i + 4);
    let padding = 4 - chunk.length;
    let val = 0;
    for (let j = 0; j < chunk.length; j++) {
      val = (val << 8) | chunk[j];
    }
    for (let j = 0; j < padding; j++) {
      val = val << 8;
    }
    val = val >>> 0;
    if (chunk.length === 4 && val === 0) {
      result += 'z';
    } else {
      let chars = [];
      for (let j = 0; j < 5; j++) {
        chars.unshift(String.fromCharCode(33 + (val % 85)));
        val = Math.floor(val / 85);
      }
      let encoded = chars.join('').slice(0, 5 - padding);
      result += encoded;
    }
    i += 4;
  }
  return result + '~>';
}

// Build the content stream
let stream = `1 0 0 1 0 0 cm  BT /F1 12 Tf 14.4 TL ET
q
1 0 0 1 37.1811 785 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 0 4.5 Tm /F2 19.5 Tf 24 TL 191.1342 0 Td (ROHIT KUMAR) Tj T* -191.1342 0 Td ET
Q
Q
q
1 0 0 1 37.1811 771 cm
q
BT 1 0 0 1 0 2.5 Tm 23.47944 0 Td 12.8 TL /F2 10.3 Tf .090196 .411765 .878431 rg (Digital Marketing & SEO Executive | WordPress Website Management | MERN Stack Foundations) Tj T* -23.47944 0 Td ET
Q
Q
q
1 0 0 1 37.1811 760 cm
q
BT 1 0 0 1 0 1.8 Tm 122.7639 0 Td 10.2 TL /F1 8.4 Tf .066667 .094118 .152941 rg (rohitkumar10eng@gmail.com | +91 7392030573 | Kanpur, India | ) Tj .090196 .411765 .878431 rg (LinkedIn) Tj T* -122.7639 0 Td ET
Q
Q
q
1 0 0 1 37.1811 736 cm
q
0 0 0 rg
BT /F1 10 Tf 12 TL ET
q
1 0 0 1 0 0 cm
q
.090196 .411765 .878431 rg
BT 1 0 0 1 0 2.45 Tm /F2 9.35 Tf 11.8 TL (PROFESSIONAL SUMMARY) Tj T* ET
Q
Q
q
1 J
1 j
.090196 .411765 .878431 RG
1.1 w
n 0 13.8 m 532.9134 13.8 l S
Q
Q
Q
q
1 0 0 1 37.1811 692 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 0 36.35 Tm /F1 8.85 Tf 11.3 TL (Digital Marketing and SEO-focused WordPress professional with hands-on experience building and managing responsive websites,) Tj T* (planning keyword-aligned content structures, and improving on-page and technical SEO. Skilled in WordPress, Astra, Elementor,) Tj T* (custom CSS, internal linking, website performance optimization, Google Analytics, and Google Search Console, with full-stack) Tj T* (development training that supports better collaboration across content, design, and web teams.) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 676 cm
q
0 0 0 rg
BT /F1 10 Tf 12 TL ET
q
1 0 0 1 0 0 cm
q
.090196 .411765 .878431 rg
BT 1 0 0 1 0 2.45 Tm /F2 9.35 Tf 11.8 TL (TECHNICAL SKILLS) Tj T* ET
Q
Q
q
1 J
1 j
.090196 .411765 .878431 RG
1.1 w
n 0 13.8 m 532.9134 13.8 l S
Q
Q
Q
q
1 0 0 1 37.1811 611 cm
q
0 0 0 rg
BT /F1 10 Tf 12 TL ET
q
1 0 0 1 2 55 cm
q
0 0 0 rg
BT 1 0 0 1 0 1.45 Tm /F2 7.75 Tf 9.2 TL (Frontend) Tj T* ET
Q
Q
q
1 0 0 1 64.3622 55 cm
q
0 0 0 rg
BT 1 0 0 1 0 1.45 Tm /F1 7.75 Tf 9.2 TL (HTML5, CSS3, JavaScript \\(ES6+\\), React.js, Next.js, Tailwind CSS, Bootstrap, Redux Toolkit) Tj T* ET
Q
Q
q
1 0 0 1 2 43.8 cm
q
0 0 0 rg
BT 1 0 0 1 0 1.45 Tm /F2 7.75 Tf 9.2 TL (Backend) Tj T* ET
Q
Q
q
1 0 0 1 64.3622 43.8 cm
q
0 0 0 rg
BT 1 0 0 1 0 1.45 Tm /F1 7.75 Tf 9.2 TL (Node.js, Express.js, REST API Design, JWT Authentication, bcrypt) Tj T* ET
Q
Q
q
1 0 0 1 2 32.6 cm
q
0 0 0 rg
BT 1 0 0 1 0 1.45 Tm /F2 7.75 Tf 9.2 TL (Database) Tj T* ET
Q
Q
q
1 0 0 1 64.3622 32.6 cm
q
0 0 0 rg
BT 1 0 0 1 0 1.45 Tm /F1 7.75 Tf 9.2 TL (MongoDB, Mongoose, MySQL) Tj T* ET
Q
Q
q
1 0 0 1 2 21.4 cm
q
0 0 0 rg
BT 1 0 0 1 0 1.45 Tm /F2 7.75 Tf 9.2 TL (Tools) Tj T* ET
Q
Q
q
1 0 0 1 64.3622 12.2 cm
q
0 0 0 rg
BT 1 0 0 1 0 10.65 Tm /F1 7.75 Tf 9.2 TL (Git, Postman, VS Code, Vercel, Netlify, Figma-to-UI, Google Analytics, Google Search Console, keyword research tools, WordPress) Tj T* (SEO plugins) Tj T* ET
Q
Q
q
1 0 0 1 2 1 cm
q
BT 1 0 0 1 0 1.45 Tm 9.2 TL /F2 7.75 Tf 0 0 0 rg (CMS & SEO) Tj T* ET
Q
Q
q
1 0 0 1 64.3622 1 cm
q
0 0 0 rg
BT 1 0 0 1 0 1.45 Tm /F1 7.75 Tf 9.2 TL (WordPress, PHP, Elementor, Astra, On-Page SEO, Technical SEO, Keyword Research, Content Structure, Internal Linking) Tj T* ET
Q
Q
q
1 J
1 j
0 0 0 RG
.55 w
n 0 65.2 m 532.9134 65.2 l S
n 0 0 m 532.9134 0 l S
n 0 0 m 0 65.2 l S
n 532.9134 0 m 532.9134 65.2 l S
n 0 54 m 532.9134 54 l S
n 0 42.8 m 532.9134 42.8 l S
n 0 31.6 m 532.9134 31.6 l S
n 0 11.2 m 532.9134 11.2 l S
n 62.3622 0 m 62.3622 65.2 l S
Q
Q
Q
q
1 0 0 1 37.1811 597.5 cm
q
0 0 0 rg
BT /F1 10 Tf 12 TL ET
q
1 0 0 1 0 0 cm
q
.090196 .411765 .878431 rg
BT 1 0 0 1 0 2.45 Tm /F2 9.35 Tf 11.8 TL (EXPERIENCE) Tj T* ET
Q
Q
q
1 J
1 j
.090196 .411765 .878431 RG
1.1 w
n 0 13.8 m 532.9134 13.8 l S
Q
Q
Q
q
1 0 0 1 37.1811 583.5 cm
q
BT 1 0 0 1 0 2.05 Tm 11.1 TL /F2 9.05 Tf .066667 .094118 .152941 rg (WordPress Developer & SEO Executive | True Technologies | April 2026 - Present) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 559.5 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 13.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Build and manage a WordPress website with 92 published blog posts using Astra, Elementor, and custom CSS, including responsive) Tj T* 6 0 Td (layouts, mega menus, custom headers/footers, and editable CMS sections.) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 534.7 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 13.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Support SEO execution through keyword research, content structure, metadata-friendly page layouts, internal linking, technical checks,) Tj T* 6 0 Td (and performance optimization.) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 509.9 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 13.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Use Google Analytics and Google Search Console to review website visibility, indexing signals, and user engagement data for ongoing) Tj T* 6 0 Td (website improvements.) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 495.8 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 0 2.05 Tm /F2 9.05 Tf 11.1 TL (MERN Stack Developer Trainee | QSpiders, Noida | August 2025 - March 2026) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 471.8 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 13.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Completed project-based full-stack training across MongoDB, Express.js, React.js, and Node.js with focus on practical development) Tj T* 6 0 Td (workflows.) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 458.0 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 2.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Built RESTful APIs with JWT authentication, protected routes, MongoDB/Mongoose integration, React Router, and Redux Toolkit.) Tj T* 6 0 Td ET
Q
Q
q
1 0 0 1 37.1811 443.9 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 0 2.05 Tm /F2 9.05 Tf 11.1 TL (Frontend Developer - Independent Projects | Self-Initiated | Remote | March 2025 - Present) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 419.9 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 13.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Built responsive React.js applications from Figma-style UI concepts and deployed live projects on Netlify, Vercel, and static hosting) Tj T* 6 0 Td (workflows.) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 406.1 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 2.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Integrated OpenAI, Gemini AI, Clerk Auth, lazy loading, code splitting, and image optimization for fast user-facing web experiences.) Tj T* 6 0 Td ET
Q
Q
q
1 0 0 1 37.1811 390.0 cm
q
0 0 0 rg
BT /F1 10 Tf 12 TL ET
q
1 0 0 1 0 0 cm
q
.090196 .411765 .878431 rg
BT 1 0 0 1 0 2.45 Tm /F2 9.35 Tf 11.8 TL (PROJECTS) Tj T* ET
Q
Q
q
1 J
1 j
.090196 .411765 .878431 RG
1.1 w
n 0 13.8 m 532.9134 13.8 l S
Q
Q
Q
q
1 0 0 1 37.1811 376.0 cm
q
BT 1 0 0 1 0 2.05 Tm 11.1 TL /F2 9.05 Tf .066667 .094118 .152941 rg (VPN Affiliate & Blog Website | ) Tj .090196 .411765 .878431 rg (vpnexpertguide.com) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 364.5 cm
q
.215686 .254902 .317647 rg
BT 1 0 0 1 0 2.3 Tm /F1 8.4 Tf 10.7 TL (WordPress | Astra | Elementor | Custom CSS | SEO | Google Analytics | Google Search Console) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 342.0 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 13.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Built and managed 92 VPN-focused blog posts on a responsive WordPress website, organizing content for discoverability and long-form) Tj T* 6 0 Td (SEO publishing.) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 319.0 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 13.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Configured custom headers, footers, mega menus, content categories, internal linking paths, and mobile-friendly layouts for a cleaner) Tj T* 6 0 Td (navigation experience.) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 296.0 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 13.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Applied keyword research, on-page SEO, technical SEO checks, content formatting, performance optimization, and analytics/search) Tj T* 6 0 Td (console monitoring.) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 282.5 cm
q
BT 1 0 0 1 0 2.05 Tm 11.1 TL /F2 9.05 Tf .066667 .094118 .152941 rg (AI Story Generator | ) Tj .090196 .411765 .878431 rg (ai-story-generator.netlify.app) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 271.0 cm
q
.215686 .254902 .317647 rg
BT 1 0 0 1 0 2.3 Tm /F1 8.4 Tf 10.7 TL (React.js \\(Vite\\) | Tailwind CSS | OpenAI API | Gemini AI | Clerk Auth | JWT | Node.js | Express.js | MongoDB) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 258.5 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 2.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Full-stack AI app where users generate stories and illustrations through OpenAI and Gemini APIs with a per-user credit wallet flow.) Tj T* 6 0 Td ET
Q
Q
q
1 0 0 1 37.1811 245.5 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 2.5 Tm /F1 8.5 Tf 11 TL -6 0 Td -0.055895 Tw (- Implemented Clerk + JWT authentication, protected routes, responsive UI states, async API handling, loading states, and error feedback.) Tj T* 0 Tw 6 0 Td ET
Q
Q
q
1 0 0 1 37.1811 232.0 cm
q
BT 1 0 0 1 0 2.05 Tm 11.1 TL /F2 9.05 Tf .066667 .094118 .152941 rg (E-Commerce Store - Sporting Goods | ) Tj .090196 .411765 .878431 rg (sporting-goods.netlify.app) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 220.5 cm
q
.215686 .254902 .317647 rg
BT 1 0 0 1 0 2.3 Tm /F1 8.4 Tf 10.7 TL (React.js | Redux Toolkit | Axios | Node.js | Express.js | MongoDB | Mongoose | JWT) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 208.0 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 2.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Built a full-stack e-commerce platform with product listings, cart, user authentication, order management, search/filter, and order history.) Tj T* 6 0 Td ET
Q
Q
q
1 0 0 1 37.1811 195.0 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 2.5 Tm /F1 8.5 Tf 11 TL -6 0 Td -0.117756 Tw (- Created REST APIs with JWT-secured routes and role-based access for admin and customer workflows in a mobile-responsive interface.) Tj T* 0 Tw 6 0 Td ET
Q
Q
q
1 0 0 1 37.1811 181.5 cm
q
BT 1 0 0 1 0 2.05 Tm 11.1 TL /F2 9.05 Tf .066667 .094118 .152941 rg (Developer Portfolio & Showcase | ) Tj .090196 .411765 .878431 rg (rohit221952.github.io/rohit-portfolio) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 170.0 cm
q
.215686 .254902 .317647 rg
BT 1 0 0 1 0 2.3 Tm /F1 8.4 Tf 10.7 TL (React.js | TypeScript | Tailwind CSS | Framer Motion | Vite | GitHub Actions) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 157.5 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 2.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Built an interactive, high-performance portfolio featuring cosmic glassmorphism UI, live mini-app mockups, and Lighthouse 95+ score.) Tj T* 6 0 Td ET
Q
Q
q
1 0 0 1 37.1811 144.5 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 8 2.5 Tm /F1 8.5 Tf 11 TL -6 0 Td (- Implemented automated CI/CD deployment pipeline with GitHub Actions, custom domain/SSL configuration, and strict TypeScript architecture.) Tj T* 6 0 Td ET
Q
Q
q
1 0 0 1 37.1811 129.5 cm
q
0 0 0 rg
BT /F1 10 Tf 12 TL ET
q
1 0 0 1 0 0 cm
q
.090196 .411765 .878431 rg
BT 1 0 0 1 0 2.45 Tm /F2 9.35 Tf 11.8 TL (EDUCATION) Tj T* ET
Q
Q
q
1 J
1 j
.090196 .411765 .878431 RG
1.1 w
n 0 13.8 m 532.9134 13.8 l S
Q
Q
Q
q
1 0 0 1 37.1811 118.0 cm
q
BT 1 0 0 1 0 2.45 Tm 11.3 TL /F2 8.85 Tf .066667 .094118 .152941 rg (B.Tech - Computer Science & Engineering) Tj /F1 8.85 Tf ( | Kanpur Institute of Technology \\(KIT\\), Kanpur, India | Graduated: June 2025) Tj T* ET
Q
Q
q
1 0 0 1 37.1811 103.0 cm
q
0 0 0 rg
BT /F1 10 Tf 12 TL ET
q
1 0 0 1 0 0 cm
q
.090196 .411765 .878431 rg
BT 1 0 0 1 0 2.45 Tm /F2 9.35 Tf 11.8 TL (CERTIFICATIONS) Tj T* ET
Q
Q
q
1 J
1 j
.090196 .411765 .878431 RG
1.1 w
n 0 13.8 m 532.9134 13.8 l S
Q
Q
Q
q
1 0 0 1 37.1811 91.5 cm
q
.066667 .094118 .152941 rg
BT 1 0 0 1 0 2.45 Tm /F1 8.85 Tf 11.3 TL (Full Stack Web Development Certification - QSpiders, Noida | 2026) Tj T* ET
Q
Q
`;

// Compress stream with flate + ascii85
const flated = zlib.deflateSync(Buffer.from(stream, 'latin1'));
const a85 = encodeAscii85(flated);

// Link annotations
// LinkedIn: Y ~ 760 -> Rect [ 403.5786 760.12 435.3306 770.2 ]
// VPN: Y ~ 376.0 -> Rect [ 167.9446 376.24 256.4536 387.1 ]
// AI Story: Y ~ 282.5 -> Rect [ 125.2105 282.74 250.4263 293.6 ]
// E-Commerce: Y ~ 232.0 -> Rect [ 202.6423 232.24 316.7809 243.1 ]
// Portfolio: Y ~ 181.5 -> Rect [ 183.67 181.74 334.57 192.6 ]

const objects = [];

objects[1] = `<<
/F1 2 0 R /F2 3 0 R
>>`;

objects[2] = `<<
/BaseFont /Helvetica /Encoding /WinAnsiEncoding /Name /F1 /Subtype /Type1 /Type /Font
>>`;

objects[3] = `<<
/BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding /Name /F2 /Subtype /Type1 /Type /Font
>>`;

objects[4] = `<<
/A <<
/S /URI /Type /Action /URI (https://www.linkedin.com/in/rohitkumar88966/)
>> /Border [ 0 0 0 ] /Rect [ 403.5786 760.12 435.3306 770.2 ] /Subtype /Link /Type /Annot
>>`;

objects[5] = `<<
/A <<
/S /URI /Type /Action /URI (https://vpnexpertguide.com/)
>> /Border [ 0 0 0 ] /Rect [ 167.9446 376.24 256.4536 387.1 ] /Subtype /Link /Type /Annot
>>`;

objects[6] = `<<
/A <<
/S /URI /Type /Action /URI (https://ai-story-generator.netlify.app)
>> /Border [ 0 0 0 ] /Rect [ 125.2105 282.74 250.4263 293.6 ] /Subtype /Link /Type /Annot
>>`;

objects[7] = `<<
/A <<
/S /URI /Type /Action /URI (https://sporting-goods.netlify.app)
>> /Border [ 0 0 0 ] /Rect [ 202.6423 232.24 316.7809 243.1 ] /Subtype /Link /Type /Annot
>>`;

objects[8] = `<<
/A <<
/S /URI /Type /Action /URI (https://rohit221952.github.io/rohit-portfolio/)
>> /Border [ 0 0 0 ] /Rect [ 183.67 181.74 334.57 192.6 ] /Subtype /Link /Type /Annot
>>`;

objects[9] = `<<
/Annots [ 4 0 R 5 0 R 6 0 R 7 0 R 8 0 R ] /Contents 13 0 R /MediaBox [ 0 0 595.2756 841.8898 ] /Parent 12 0 R /Resources <<
/Font 1 0 R /ProcSet [ /PDF /Text /ImageB /ImageC /ImageI ]
>> /Rotate 0 
  /Trans <<

>> /Type /Page
>>`;

objects[10] = `<<
/PageMode /UseNone /Pages 12 0 R /Type /Catalog
>>`;

objects[11] = `<<
/Author (Rohit Kumar) /CreationDate (D:20261005153000+05'00') /Creator (ReportLab PDF Library - \\(opensource\\)) /Keywords () /ModDate (D:20261005153000+05'00') /Producer (ReportLab PDF Library - \\(opensource\\)) 
  /Subject (Full Stack Developer & SEO Resume) /Title (Rohit Kumar - Full Stack Developer Resume) /Trapped /False
>>`;

objects[12] = `<<
/Count 1 /Kids [ 9 0 R ] /Type /Pages
>>`;

objects[13] = `<<
/Filter [ /ASCII85Decode /FlateDecode ] /Length ${a85.length}
>>
stream
${a85}
endstream`;

// Assemble PDF
let pdfContent = '%PDF-1.4\n%\xE2\xE3\xCF\xD3 ReportLab Generated PDF document (opensource)\n';
const offsets = [];

for (let i = 1; i <= 13; i++) {
  offsets[i] = pdfContent.length;
  pdfContent += `${i} 0 obj\n${objects[i]}\nendobj\n`;
}

const xrefStart = pdfContent.length;
pdfContent += `xref\n0 14\n0000000000 65535 f \n`;

for (let i = 1; i <= 13; i++) {
  const offStr = String(offsets[i]).padStart(10, '0');
  pdfContent += `${offStr} 00000 n \n`;
}

pdfContent += `trailer\n<<\n/ID [<3904f21d47982c6cae8071e04db16aa0><3904f21d47982c6cae8071e04db16aa0>]\n/Info 11 0 R\n/Root 10 0 R\n/Size 14\n>>\nstartxref\n${xrefStart}\n%%EOF\n`;

// Write to files
const targets = [
  path.resolve('d:/rohit-portfolio/public/rohit_kumar_resume.pdf'),
  path.resolve('d:/rohit-portfolio/dist/rohit_kumar_resume.pdf'),
  path.resolve('d:/rohit-portfolio/public/resume.pdf'),
  path.resolve('d:/rohit-portfolio/public/Rohit-Kumar-Resume.pdf'),
  'C:/Users/Gyan/Downloads/rohit_kumar_resume.pdf',
  'C:/Users/Gyan/Downloads/Rohit_Kumar_Resume.pdf'
];

for (const t of targets) {
  try {
    fs.writeFileSync(t, pdfContent, 'latin1');
    console.log(`Saved: ${t}`);
  } catch (err) {
    console.error(`Failed to write ${t}:`, err.message);
  }
}
