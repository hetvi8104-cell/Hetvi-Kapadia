import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
}

export const FashionCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string>('');
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef<Point[]>([]);
  const trailPathRef = useRef<SVGPathElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop/fine-pointer devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    // Add class to body to hide default cursor cleanly
    document.body.classList.add('fashion-custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      // Update trail points
      trailRef.current.push({ x: e.clientX, y: e.clientY });
      if (trailRef.current.length > 18) {
        trailRef.current.shift();
      }

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          'a, button, input, select, textarea, [role="button"], .cursor-pointer, [id*="card"], [id*="tab"]'
        );
        if (interactiveEl) {
          setIsHovered(true);
          // Contextual label depending on the element
          if (interactiveEl.tagName === 'BUTTON' && interactiveEl.textContent?.toLowerCase().includes('dossier')) {
            setHoverLabel('INSPECT');
          } else if (interactiveEl.closest('#garments-grid') || interactiveEl.id?.includes('garment')) {
            setHoverLabel('COUTURE');
          } else if (interactiveEl.closest('nav') || interactiveEl.closest('header')) {
            setHoverLabel('NAVIGATE');
          } else {
            setHoverLabel('STITCH');
          }
        } else {
          setIsHovered(false);
          setHoverLabel('');
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      posRef.current = { x: -100, y: -100 };
      trailRef.current = [];
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop for fluid smooth needle and silk thread
    let currentX = -100;
    let currentY = -100;

    const animate = () => {
      // Smooth interpolation for main needle
      currentX += (posRef.current.x - currentX) * 0.45;
      currentY += (posRef.current.y - currentY) * 0.45;

      if (needleRef.current) {
        needleRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      // Draw trailing golden silk thread
      if (trailPathRef.current && trailRef.current.length > 2) {
        const points = trailRef.current;
        let d = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          d += ` Q ${points[i].x} ${points[i].y}, ${xc} ${yc}`;
        }
        d += ` L ${points[points.length - 1].x} ${points[points.length - 1].y}`;
        trailPathRef.current.setAttribute('d', d);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      document.body.classList.remove('fashion-custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!isPointerFine) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none"
    >
      {/* 1. Trailing Golden Silk Thread SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <defs>
          <linearGradient id="goldSilkThreadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0B069" stopOpacity="0" />
            <stop offset="60%" stopColor="#E0B069" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FAF2EE" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          ref={trailPathRef}
          fill="none"
          stroke="url(#goldSilkThreadGradient)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray={isHovered ? '3 3' : 'none'}
        />
      </svg>

      {/* 2. Puncture / Stitch Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full border border-[#E0B069] pointer-events-none animate-stitchRipple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* 3. The Atelier Haute-Couture Needle & Tailoring Crosshair */}
      <div
        ref={needleRef}
        className="absolute top-0 left-0 pointer-events-none transition-[opacity] duration-300"
        style={{ willChange: 'transform' }}
      >
        {/* Precision Center Dot */}
        <div
          className={`absolute w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ${
            isClicking
              ? 'scale-150 bg-[#FAF2EE] shadow-[0_0_10px_#E0B069]'
              : 'bg-[#E0B069] shadow-[0_0_6px_#E0B069]'
          }`}
        />

        {/* Haute Couture Sewing Needle */}
        <svg
          className={`absolute w-9 h-9 -top-1 -left-1 transition-all duration-300 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
            isHovered ? 'scale-110 -rotate-12' : 'scale-100 rotate-0'
          } ${isClicking ? 'translate-y-0.5 scale-90' : ''}`}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Needle Shaft */}
          <path
            d="M 1 1 L 28 28"
            stroke="url(#needleShine)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Needle Eyelet at Top */}
          <ellipse
            cx="27"
            cy="27"
            rx="3.5"
            ry="1.8"
            transform="rotate(45 27 27)"
            stroke="#E0B069"
            strokeWidth="1.2"
            fill="#120408"
          />

          {/* Golden Thread Looping through Eyelet */}
          <path
            d="M 27 27 C 32 30, 34 24, 30 22 C 28 20, 26 23, 27 27"
            stroke="#E0B069"
            strokeWidth="1"
            fill="none"
            opacity="0.85"
          />

          {/* Sharp Diamond Point at Tip */}
          <circle cx="1.5" cy="1.5" r="1.2" fill="#FAF2EE" />

          <defs>
            <linearGradient id="needleShine" x1="1" y1="1" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#E0B069" />
              <stop offset="85%" stopColor="#C5B095" />
              <stop offset="100%" stopColor="#E0B069" />
            </linearGradient>
          </defs>
        </svg>

        {/* Tailor's Circular Stitched Guide on Hover */}
        {isHovered && (
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full border border-dashed border-[#E0B069]/80 animate-spin-slow pointer-events-none flex items-center justify-center">
            {/* Notch ticks */}
            <span className="absolute top-0 w-1 h-0.5 bg-[#E0B069]" />
            <span className="absolute bottom-0 w-1 h-0.5 bg-[#E0B069]" />
            <span className="absolute left-0 h-1 w-0.5 bg-[#E0B069]" />
            <span className="absolute right-0 h-1 w-0.5 bg-[#E0B069]" />
          </div>
        )}

        {/* Hover Context Micro-Badge */}
        {isHovered && hoverLabel && (
          <div className="absolute left-7 top-4 px-2 py-0.5 rounded bg-black/80 border border-[#E0B069]/60 text-[8px] font-mono tracking-widest text-[#E0B069] whitespace-nowrap shadow-lg backdrop-blur-xs flex items-center space-x-1 animate-fadeIn">
            <span className="w-1 h-1 rounded-full bg-[#E0B069] animate-ping" />
            <span>{hoverLabel}</span>
          </div>
        )}
      </div>
    </div>
  );
};
