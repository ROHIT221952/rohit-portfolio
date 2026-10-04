import React, { useEffect, useRef } from 'react';

interface NetworkSphereProps {
  className?: string;
  size?: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
  color: string;
  glowColor: string;
  baseRadius: number;
}

interface Edge {
  p1: number;
  p2: number;
}

interface DustParticle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
}

export const NetworkSphere: React.FC<NetworkSphereProps> = ({ className = '', size }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Rotation state
    let rotX = 0.2;
    let rotY = 0;
    let targetSpeedX = 0.0015;
    let targetSpeedY = 0.0045;
    let speedX = targetSpeedX;
    let speedY = targetSpeedY;

    // Drag / Touch interaction state
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    // Generate points on sphere using Fibonacci distribution
    const numPoints = 68;
    const points: Point3D[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Color distribution: ~80% purple/violet, ~20% vibrant cyan
      const isCyan = (i % 5 === 0 || i % 9 === 0);
      points.push({
        x,
        y,
        z,
        color: isCyan ? '#25D9FF' : '#A855F7',
        glowColor: isCyan ? 'rgba(37, 217, 255, 0.7)' : 'rgba(168, 85, 247, 0.7)',
        baseRadius: isCyan ? 2.8 : 2.5
      });
    }

    // Precompute connecting edges based on 3D distance
    const edges: Edge[] = [];
    const connectionThreshold = 0.52; // distance on unit sphere
    for (let i = 0; i < numPoints; i++) {
      for (let j = i + 1; j < numPoints; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dz = points[i].z - points[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < connectionThreshold) {
          edges.push({ p1: i, p2: j });
        }
      }
    }

    // Floating background dust particles
    const dustCount = 20;
    const dustParticles: DustParticle[] = [];
    for (let i = 0; i < dustCount; i++) {
      dustParticles.push({
        x: (Math.random() - 0.5) * 220,
        y: (Math.random() - 0.5) * 220,
        size: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        color: Math.random() > 0.4 ? '#985CFF' : '#25D9FF'
      });
    }

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width || 240;
      height = rect.height || 240;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse & Touch listeners for interactive 3D rotation
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      speedY = dx * 0.005;
      speedX = -dy * 0.005;
      rotY += speedY;
      rotX += speedX;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - lastMouseX;
      const dy = e.touches[0].clientY - lastMouseY;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;

      speedY = dx * 0.005;
      speedX = -dy * 0.005;
      rotY += speedY;
      rotX += speedX;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Render loop
    let time = 0;
    const render = () => {
      time += 0.02;

      // Inertia & return to idle speed
      if (!isDragging) {
        speedX += (targetSpeedX - speedX) * 0.04;
        speedY += (targetSpeedY - speedY) * 0.04;
        rotX += speedX;
        rotY += speedY;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const sphereRadius = Math.min(width, height) * 0.36;

      // 1. Draw Cosmic Ambient Background Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, sphereRadius * 1.3);
      glowGrad.addColorStop(0, 'rgba(152, 92, 255, 0.22)');
      glowGrad.addColorStop(0.45, 'rgba(56, 119, 255, 0.08)');
      glowGrad.addColorStop(1, 'rgba(3, 6, 16, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, sphereRadius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Render subtle floating ambient dust
      dustParticles.forEach((dust) => {
        dust.alpha = 0.25 + 0.2 * Math.sin(time + dust.x);
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx + dust.x, cy + dust.y, dust.size, 0, Math.PI * 2);
        ctx.fillStyle = dust.color;
        ctx.globalAlpha = Math.max(0.05, Math.min(1, dust.alpha));
        ctx.shadowBlur = 4;
        ctx.shadowColor = dust.color;
        ctx.fill();
        ctx.restore();
      });

      // 3. 3D Rotation Matrix Calculation
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Camera perspective parameters
      const fov = sphereRadius * 2.8;

      // Project all points
      const projected = points.map((p) => {
        // Rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const y1 = p.y;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate around X
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // Scale by radius
        const worldX = x2 * sphereRadius;
        const worldY = y2 * sphereRadius;
        const worldZ = z2 * sphereRadius;

        // Perspective projection
        const scale = fov / (fov + worldZ);
        const px = cx + worldX * scale;
        const py = cy + worldY * scale;

        // Normalized depth from 0 (back) to 1 (front)
        const depthFactor = (worldZ + sphereRadius) / (2 * sphereRadius);

        return {
          px,
          py,
          worldZ,
          depthFactor,
          color: p.color,
          glowColor: p.glowColor,
          baseRadius: p.baseRadius * scale
        };
      });

      // 4. Draw Connecting Wireframe Edges
      edges.forEach((edge) => {
        const p1 = projected[edge.p1];
        const p2 = projected[edge.p2];

        // Average depth of edge
        const avgDepth = (p1.depthFactor + p2.depthFactor) / 2;
        
        // Depth-based opacity & stroke width
        const edgeAlpha = Math.max(0.08, Math.min(0.65, 0.08 + avgDepth * 0.55));
        const lineWidth = 0.6 + avgDepth * 0.8;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);

        ctx.strokeStyle = `rgba(138, 92, 246, ${edgeAlpha})`;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.restore();
      });

      // 5. Draw Nodes (Sort back to front for correct glow layering)
      const sortedIndices = projected
        .map((p, idx) => ({ idx, z: p.worldZ }))
        .sort((a, b) => a.z - b.z);

      sortedIndices.forEach(({ idx }) => {
        const node = projected[idx];
        const alpha = Math.max(0.2, Math.min(1, 0.25 + node.depthFactor * 0.75));
        const radius = Math.max(1.2, node.baseRadius * (0.6 + node.depthFactor * 0.7));

        ctx.save();
        ctx.globalAlpha = alpha;

        // Outer glow for foreground nodes
        if (node.depthFactor > 0.45) {
          ctx.shadowBlur = 10 * node.depthFactor;
          ctx.shadowColor = node.glowColor;
        }

        // Central node dot
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Highlight ring on prominent front nodes
        if (node.depthFactor > 0.7) {
          ctx.beginPath();
          ctx.arc(node.px, node.py, radius + 1.8, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center select-none overflow-hidden group cursor-grab active:cursor-grabbing ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        style={{ touchAction: 'none' }}
        title="Interactive 3D Constellation Network Sphere - Click & drag to rotate"
      />
    </div>
  );
};
