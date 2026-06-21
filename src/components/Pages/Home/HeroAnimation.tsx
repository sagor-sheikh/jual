"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Base Orbit ellipse dimensions
const RX = 248;
const RY = 176;
const OX = -50; // Orbit center offset from viewport center

// Small card (ring icon) dimensions
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
}

// 12 cards evenly distributed around the orbit
const CARDS: CardDef[] = [
  { id: 0,  a: 0,   fw: 270, fh: 168, fr: -3, bg: ["#052516", "#0d4d31", "#15774c"], type: "web"   },
  { id: 1,  a: 30,  fw: 210, fh: 310, fr: 5,  bg: ["#0b1f3c", "#173b70", "#265da8"], type: "phone" },
  { id: 2,  a: 60,  fw: 260, fh: 170, fr: -6, bg: ["#2d0e0e", "#5a1f1f", "#8d3434"], type: "web"   },
  { id: 3,  a: 90,  fw: 220, fh: 300, fr: 4,  bg: ["#241505", "#4a2c0a", "#784b15"], type: "phone" },
  { id: 4,  a: 120, fw: 280, fh: 160, fr: -5, bg: ["#1c0c2b", "#3d1b5c", "#653194"], type: "web"   },
  { id: 5,  a: 150, fw: 200, fh: 320, fr: 6,  bg: ["#0c2527", "#1d4c50", "#2f7b80"], type: "phone" },
  { id: 6,  a: 180, fw: 270, fh: 165, fr: -4, bg: ["#1e2509", "#3f4d17", "#637827"], type: "web"   },
  { id: 7,  a: 210, fw: 215, fh: 315, fr: -5, bg: ["#220d2b", "#491e5c", "#7b3699"], type: "phone" },
  { id: 8,  a: 240, fw: 250, fh: 175, fr: 3,  bg: ["#092628", "#155054", "#237e84"], type: "web"   },
  { id: 9,  a: 270, fw: 230, fh: 290, fr: -4, bg: ["#2d1b09", "#5b3614", "#925722"], type: "phone" },
  { id: 10, a: 300, fw: 275, fh: 162, fr: 5,  bg: ["#151c27", "#2b394f", "#445877"], type: "web"   },
  { id: 11, a: 330, fw: 225, fh: 305, fr: -6, bg: ["#082e1b", "#105d39", "#1b8a53"], type: "phone" },
];

// ─── Inner glassmorphic UI placeholders ───────────────────────────────────────
function CardInner({ type, id }: { type: "web" | "phone"; id: number }) {
  if (type === "web") {
    return (
      <div className="absolute inset-0 flex flex-col overflow-hidden text-white/95">
        {/* Browser Header */}
        <div className="shrink-0 h-6 bg-black/45 border-b border-white/10 flex items-center gap-1.5 px-3">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-4 h-3.5 bg-white/10 rounded flex items-center px-2 text-[8px] text-white/40 overflow-hidden font-sans select-none">
            {id % 2 === 0 ? "https://juice.design/agency" : "https://juice.creative/portfolio"}
          </div>
          <div className="w-3 h-0.5 bg-white/30 rounded" />
        </div>

        {/* Content Layout */}
        <div className="flex-1 p-3 flex flex-col gap-2 font-sans select-none bg-black/10">
          {/* Header */}
          <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
            <div className="w-10 h-3 bg-white/20 rounded" />
            <div className="flex gap-1.5">
              <div className="w-6 h-2 bg-white/10 rounded" />
              <div className="w-6 h-2 bg-white/10 rounded" />
              <div className="w-6 h-2 bg-white/10 rounded" />
            </div>
          </div>

          {/* Hero Block */}
          <div className="flex-1 flex gap-2">
            <div className="flex-[3] flex flex-col gap-2 justify-center">
              <div className="h-4 bg-white/35 rounded-sm w-11/12" />
              <div className="h-2.5 bg-white/20 rounded-sm w-full" />
              <div className="h-2.5 bg-white/20 rounded-sm w-3/4" />
              <div className="h-4 bg-white/30 rounded w-5/12 mt-1" />
            </div>
            <div className="flex-[2] bg-white/10 rounded-md border border-white/10 p-1 flex flex-col gap-1">
              <div className="flex-1 bg-white/10 rounded flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white/15 animate-pulse" />
              </div>
              <div className="h-2 bg-white/15 rounded-sm" />
              <div className="h-2 bg-white/15 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile App Phone Mockup
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden text-white/95">
      {/* Status Bar */}
      <div className="shrink-0 h-6 bg-black/25 flex items-center justify-between px-3 text-[9px] font-sans text-white/60 select-none">
        <span>09:41</span>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-1.5 bg-white/60 rounded-xs" />
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 p-3 flex flex-col gap-2.5 font-sans select-none bg-black/5">
        {/* Profile Card */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 border border-white/10 flex items-center justify-center text-[10px]">👤</div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-2.5 bg-white/30 rounded w-1/2" />
            <div className="h-2 bg-white/15 rounded w-1/3" />
          </div>
        </div>

        {/* Dynamic Card Area */}
        <div className="bg-white/10 rounded-lg p-2 border border-white/10 flex flex-col gap-1.5">
          <div className="h-2.5 bg-white/30 rounded w-3/4" />
          <div className="h-5 bg-white/15 rounded" />
          <div className="flex justify-between mt-1">
            <div className="w-1/4 h-2.5 bg-white/15 rounded" />
            <div className="w-1/3 h-2.5 bg-white/25 rounded" />
          </div>
        </div>

        {/* Small List */}
        <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
          {[1, 2].map(j => (
            <div key={j} className="h-7 bg-white/5 rounded flex items-center px-2 justify-between border border-white/5">
              <div className="flex items-center gap-2 w-full">
                <div className="w-3.5 h-3.5 rounded bg-white/20" />
                <div className="flex-1 flex flex-col gap-1">
                  <div className="h-2 bg-white/25 rounded w-1/2" />
                  <div className="h-1.5 bg-white/10 rounded w-1/3" />
                </div>
              </div>
              <div className="w-4 h-3 bg-white/20 rounded-full" />
            </div>
          ))}
        </div>

        {/* Tab Bar */}
        <div className="h-8 bg-black/20 border-t border-white/5 flex items-center justify-around rounded-t-lg -mx-3 -mb-3 px-3">
          {[1, 2, 3, 4].map(j => (
            <div key={j} className="w-3.5 h-3.5 rounded-full bg-white/15" />
          ))}
        </div>
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

    inners.forEach(el => gsap.set(el, { opacity: 0 }));
    thumbnails.forEach(el => gsap.set(el, { opacity: 1 }));

    // Animation state variables
    let orbitDeg = 0;             // Base auto-rotation angle
    let targetScrollProg = 0;     // Scroll Trigger position (0 to 1)
    let smoothScrollProg = 0;     // Damped scroll progress
    let targetVelocity = 0;       // Velocity from scroll trigger
    let smoothVelocity = 0;       // Damped velocity

    const render = () => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const scaleFactor = isMobile ? 0.65 : 1.0;
      const adaptiveRX = isMobile ? window.innerWidth * 0.32 : RX;
      const adaptiveRY = isMobile ? window.innerHeight * 0.18 : RY;

      // Smooth interpolation (lerping)
      smoothScrollProg += (targetScrollProg - smoothScrollProg) * 0.08;
      smoothVelocity += (targetVelocity - smoothVelocity) * 0.08;
      
      // Decay velocity target back to 0
      targetVelocity *= 0.95;

      // Scroll changes rotation directly, creating a "scroll to spin" effect
      const scrollAngle = smoothScrollProg * 480; 
      const velocitySpin = smoothVelocity * 0.03;
      const totalAngle = orbitDeg + scrollAngle + velocitySpin;

      // Centrifugal orbit stretch when scrolling fast
      const speed = Math.abs(smoothVelocity);
      const centrifugalStretch = 1 + Math.min(speed * 0.00008, 0.12);
      const currentRX = adaptiveRX * centrifugalStretch;
      const currentRY = adaptiveRY * centrifugalStretch;

      cards.forEach((card, i) => {
        const d = CARDS[i];
        const rad = ((d.a + totalAngle) * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        // Only cards on the front-right side of the circle expand (cos > 0)
        // Back cards stay as small thumbnails
        const depth = Math.max(0, cos);
        const t = easeOutCubic(depth * smoothScrollProg);

        // Card size scaling
        const w = SW + (d.fw * scaleFactor - SW) * t;
        const h = SH + (d.fh * scaleFactor - SH) * t;
        const br = SBR + (LBR - SBR) * t;

        // Push active cards outward slightly to frame them nicely and overlap elegantly
        const spread = 1 + t * 0.14;
        const x = OX + cos * currentRX * spread;
        const y = sin * currentRY * spread;

        // Dynamic tilts/skews based on speed and base layout values
        const velocityTilt = smoothVelocity * 0.004;
        const skewX = Math.max(-12, Math.min(12, smoothVelocity * 0.006));
        const r = d.fr * t + velocityTilt;

        // Dynamic z-index layering (cos maps depth; front = highest z-index)
        const dynamicZ = Math.round((cos + 1) * 30) + 5;

        gsap.set(card, {
          x,
          y,
          width: w,
          height: h,
          rotation: r,
          skewX,
          borderRadius: br,
          zIndex: dynamicZ,
        });

        // Cross-fade the simplified thumbnail icon and detailed layout content
        if (thumbnails[i]) {
          gsap.set(thumbnails[i], { opacity: Math.max(0, 1 - t * 2.2) });
        }
        if (inners[i]) {
          gsap.set(inners[i], { opacity: Math.max(0, (t - 0.35) * 1.5) });
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

    // Bind ScrollTrigger
    const st = ScrollTrigger.create({
      trigger: wrapRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: self => {
        targetScrollProg = self.progress;
        targetVelocity = self.getVelocity();
      },
    });

    // Handle screen resize events to update coordinates instantly
    const handleResize = () => render();
    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(ticker);
      st.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ height: "320vh" }}>
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#f8f9f7]"
      >
        {CARDS.map((card, i) => (
          <div
            key={card.id}
            ref={el => { cardRefs.current[i] = el; }}
            className="absolute overflow-hidden shadow-lg border border-white/10"
            style={{
              left: "50%",
              top: "50%",
              background: `linear-gradient(145deg, ${card.bg.join(", ")})`,
              willChange: "transform, width, height, z-index",
            }}
          >
            {/* Centered Thumbnail Icon (Visible when small, fades out on expansion) */}
            <div
              ref={el => { thumbnailRefs.current[i] = el; }}
              className="absolute inset-0 flex items-center justify-center text-white/70"
            >
              {card.type === "web" ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              )}
            </div>

            {/* Glassmorphic UI Details (Fades in on expansion) */}
            <div
              ref={el => { innerRefs.current[i] = el; }}
              className="absolute inset-0 opacity-0"
            >
              <CardInner type={card.type} id={card.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

