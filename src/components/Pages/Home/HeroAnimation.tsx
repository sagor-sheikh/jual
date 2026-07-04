"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Base Orbit ellipse dimensions
const RX = 248;
const RY = 176;
const OX = -50; // Orbit center offset from viewport center

// Small card dimensions
const SW = 60;
const SH = 46;
const SBR = 10;
const LBR = 20;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

interface CardDef {
  id: number;
  /** Starting orbit angle in degrees */
  a: number;
  /** Final width (when at front + full scroll) */
  fw: number;
  /** Final height */
  fh: number;
  /** Final rotation in degrees */
  fr: number;
  bg: string[];
  type: "web" | "phone";
  imageUrl: string;
}

// 12 cards evenly distributed around the orbit with curated mockup image assets
const CARDS: CardDef[] = [
  {
    id: 0,
    a: 0,
    fw: 270,
    fh: 168,
    fr: -3,
    bg: ["#052516", "#0d4d31", "#15774c"],
    type: "web",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 1,
    a: 30,
    fw: 210,
    fh: 310,
    fr: 5,
    bg: ["#0b1f3c", "#173b70", "#265da8"],
    type: "phone",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    a: 60,
    fw: 260,
    fh: 170,
    fr: -6,
    bg: ["#2d0e0e", "#5a1f1f", "#8d3434"],
    type: "web",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    a: 90,
    fw: 220,
    fh: 300,
    fr: 4,
    bg: ["#241505", "#4a2c0a", "#784b15"],
    type: "phone",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    a: 120,
    fw: 280,
    fh: 160,
    fr: -5,
    bg: ["#1c0c2b", "#3d1b5c", "#653194"],
    type: "web",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    a: 150,
    fw: 200,
    fh: 320,
    fr: 6,
    bg: ["#0c2527", "#1d4c50", "#2f7b80"],
    type: "phone",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    a: 180,
    fw: 270,
    fh: 165,
    fr: -4,
    bg: ["#1e2509", "#3f4d17", "#637827"],
    type: "web",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    a: 210,
    fw: 215,
    fh: 315,
    fr: -5,
    bg: ["#220d2b", "#491e5c", "#7b3699"],
    type: "phone",
    imageUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    a: 240,
    fw: 250,
    fh: 175,
    fr: 3,
    bg: ["#092628", "#155054", "#237e84"],
    type: "web",
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    a: 270,
    fw: 230,
    fh: 290,
    fr: -4,
    bg: ["#2d1b09", "#5b3614", "#925722"],
    type: "phone",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    a: 300,
    fw: 275,
    fh: 162,
    fr: 5,
    bg: ["#151c27", "#2b394f", "#445877"],
    type: "web",
    imageUrl: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    a: 330,
    fw: 225,
    fh: 305,
    fr: -6,
    bg: ["#082e1b", "#105d39", "#1b8a53"],
    type: "phone",
    imageUrl: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?auto=format&fit=crop&w=600&q=80",
  },
];

// ─── Inner Mockup Card Renderer ──────────────────────────────────────────────
interface CardInnerProps {
  type: "web" | "phone";
  imageUrl: string;
  id: number;
  tRef: (el: HTMLDivElement | null) => void;
  iRef: (el: HTMLDivElement | null) => void;
}

function CardInner({ type, imageUrl, id, tRef, iRef }: CardInnerProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[inherit] flex flex-col bg-neutral-900 select-none">
      {/* Visual background (mockup preview) */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center select-none" style={{ backgroundImage: `url(${imageUrl})` }} />
      {/* Elegant glass/shadow overlay to build contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none z-1" />

      {/* Thumbnail overlay: slight darkening when small (fades out as it expands) */}
      <div ref={tRef} className="absolute inset-0 bg-black/25 pointer-events-none z-5 transition-opacity" />

      {/* Device mock frame overlay (fades in as it expands) */}
      <div ref={iRef} className="absolute inset-0 flex flex-col pointer-events-none opacity-0 z-10">
        {type === "web" ? (
          <div className="shrink-0 h-6 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center gap-1.5 px-3">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 mx-4 h-3.5 bg-white/10 rounded flex items-center px-2 text-[8px] text-white/50 overflow-hidden font-sans select-none">{id % 2 === 0 ? "https://juice.design/agency" : "https://juice.creative/portfolio"}</div>
            <div className="w-3 h-0.5 bg-white/30 rounded" />
          </div>
        ) : (
          <div className="shrink-0 h-6 bg-black/40 backdrop-blur-md flex items-center justify-between px-3 text-[9px] font-sans text-white/70 select-none">
            <span>09:41</span>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-1.5 bg-white/60 rounded-xs" />
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function HeroAnimation() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!wrapRef.current) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const inners = innerRefs.current.filter(Boolean) as HTMLDivElement[];
    const thumbnails = thumbnailRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    // Initial state: Set all cards at default small sizes on the orbit path
    cards.forEach((card, i) => {
      const d = CARDS[i];
      const rad = (d.a * Math.PI) / 180;
      gsap.set(card, {
        xPercent: -50,
        yPercent: -50,
        x: OX + Math.cos(rad) * RX,
        y: Math.sin(rad) * RY,
        width: SW,
        height: SH,
        borderRadius: SBR,
        zIndex: 10,
        rotation: 0,
      });
    });

    inners.forEach((el) => gsap.set(el, { opacity: 0 }));
    thumbnails.forEach((el) => gsap.set(el, { opacity: 1 }));

    // Animation state variables
    let orbitDeg = 0; // Base auto-rotation angle
    let targetY = 0; // Custom virtual scroll position target
    let smoothY = 0; // Damped scroll position
    let smoothVelocity = 0; // Damped scroll velocity

    // Event listeners for virtual scroll gestures
    const handleWheel = (e: WheelEvent) => {
      // Prevent default browser scroll to keep page steady
      e.preventDefault();
      targetY += e.deltaY * 0.85; // Natural speed mapping
      if (targetY < 0) targetY = 0; // Return-to-top limit
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      targetY += deltaY * 1.5; // Responsive touch drag
      if (targetY < 0) targetY = 0;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        targetY += 80;
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        targetY -= 80;
        if (targetY < 0) targetY = 0;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });

    const render = () => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const scaleFactor = isMobile ? 0.65 : 1.0;
      const adaptiveRX = isMobile ? window.innerWidth * 0.32 : RX;
      const adaptiveRY = isMobile ? window.innerHeight * 0.18 : RY;

      // Smooth interpolation (lerping) for virtual scroll inertia
      smoothY += (targetY - smoothY) * 0.08;

      // Calculate scroll velocity per frame
      const frameVelocity = targetY - smoothY;
      smoothVelocity += (frameVelocity - smoothVelocity) * 0.08;

      // Continuous loop angle: auto-rotate + scroll delta + velocity drift
      const scrollAngle = smoothY * 0.15;
      const velocitySpin = smoothVelocity * 0.03;
      const totalAngle = orbitDeg + scrollAngle + velocitySpin;

      // Centrifugal orbit stretch when scrolling fast
      const speed = Math.abs(smoothVelocity);
      const centrifugalStretch = 1 + Math.min(speed * 0.00008, 0.12);
      const currentRX = adaptiveRX * centrifugalStretch;
      const currentRY = adaptiveRY * centrifugalStretch;

      // Activation progress (0 to 1) based on scroll offset from top
      const activationProgress = Math.min(1, smoothY / 150);

      cards.forEach((card, i) => {
        const d = CARDS[i];
        const rad = ((d.a + totalAngle) * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        // Only cards on the front-right side of the circle expand (cos > 0)
        // Back cards stay as small thumbnails
        const depth = Math.max(0, cos);
        const t = easeOutCubic(depth * activationProgress);

        // Card size scaling
        const w = SW + (d.fw * scaleFactor - SW) * t;
        const h = SH + (d.fh * scaleFactor - SH) * t;
        const br = SBR + (LBR - SBR) * t;

        // Push active cards outward slightly to frame them nicely and overlap elegantly
        const spread = 1 + t * 0.14;
        const x = OX + cos * currentRX * spread;
        const y = sin * currentRY * spread;

        // Dynamic z-index layering (cos maps depth; front = highest z-index)
        const dynamicZ = Math.round((cos + 1) * 30) + 5;

        gsap.set(card, {
          x,
          y,
          width: w,
          height: h,
          rotation: 0,
          skewX: 0,
          borderRadius: br,
          zIndex: dynamicZ,
        });

        // Fade UI chrome based on scale progress
        if (thumbnails[i]) {
          gsap.set(thumbnails[i], { opacity: Math.max(0, 1 - t * 1.5) });
        }
        if (inners[i]) {
          gsap.set(inners[i], { opacity: Math.max(0, (t - 0.2) * 1.25) });
        }
      });
    };

    // Auto-rotation tick (slow continuous rounding)
    const ticker = () => {
      orbitDeg += 0.16;
      if (orbitDeg >= 360) orbitDeg -= 360;
      render();
    };

    gsap.ticker.add(ticker);

    // Handle screen resize events to update coordinates instantly
    const handleResize = () => render();
    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(ticker);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#f8f9f7] select-none touch-none">
      {/* Background radial accent to look premium */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,rgba(240,242,238,0.55)_100%)] pointer-events-none" />

      {CARDS.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="absolute overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-white/20 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
          style={{
            left: "50%",
            top: "50%",
            background: `linear-gradient(145deg, ${card.bg.join(", ")})`,
            willChange: "transform, width, height, z-index",
          }}
        >
          <div className="absolute inset-0 w-full h-full">
            <CardInner
              type={card.type}
              imageUrl={card.imageUrl}
              id={card.id}
              tRef={(el) => {
                thumbnailRefs.current[i] = el;
              }}
              iRef={(el) => {
                innerRefs.current[i] = el;
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
