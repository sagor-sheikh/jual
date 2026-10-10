"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ProjectDetailsModal from "./ProjectDetailsModal";

// Rich metadata content mapping for project details popup modal
const PROJECT_DETAILS: Record<number, { title: string; subtitle: string; desc: string; tags: string[] }> = {
  0: {
    title: "Ribeca",
    subtitle: "AI SURF & HEALTH PLATFORM",
    desc: "A modern AI-powered health surf app that helps users monitor their habits, track sports performance with custom swim metrics, track personal and athletic insights and manage outdoor sports all in one place.",
    tags: ["Next.js", "AI Surf", "Sports Tech", "TailwindCSS"],
  },
  1: {
    title: "Vibe Social App",
    subtitle: "MOBILE APP DESIGN & SYSTEM",
    desc: "An immersive mobile application concept connecting creators worldwide. Designed with dark-mode aesthetic, card gestures, and custom haptics.",
    tags: ["React Native", "Expo", "Framer Motion", "Zustand"],
  },
  2: {
    title: "Docuverse",
    subtitle: "AI HEALTHCARE & TELEMEDICINE APP",
    desc: "A modern AI-powered health app that helps users monitor their habits, track and book appointments, access telemedicine, receive personalized health insights and manage medical care all in one place.",
    tags: ["Healthcare", "AI Health", "React Native", "TailwindCSS"],
  },
  3: {
    title: "Aura Smart Home",
    subtitle: "IOT MOBILE DASHBOARD",
    desc: "Sleek IoT control system managing smart lighting, climate control, and home security with high-contrast color palettes and status widgets.",
    tags: ["Flutter", "Dart", "Firebase", "WebSockets"],
  },
  4: {
    title: "Solana NFT Marketplace",
    subtitle: "WEB3 DAPP & WALLET INTEGRATION",
    desc: "Decentralized digital art gallery allowing seamless wallet connection, NFT minting, and live-bidding auctions with Web3 interactivity.",
    tags: ["Solana", "TypeScript", "Next.js", "Anchor"],
  },
  5: {
    title: "Summit Travel Guide",
    subtitle: "NATIVE OUTDOOR ADVENTURE APP",
    desc: "Curated trail guides, offline vector map navigation, and community summit check-ins developed for mobile travelers and hiking enthusiasts.",
    tags: ["React Native", "Mapbox", "Node.js", "PostgreSQL"],
  },
  6: {
    title: "Fitness",
    subtitle: "AI-POWERED HEALTHCARE & FITNESS APP",
    desc: "A modern AI-powered healthcare app that helps users monitor their health, book doctor appointments, access telemedicine, receive personalized health insights and manage medical care all in one place.",
    tags: ["UI/UX", "Mobile App", "Health & Fitness", "Next.js"],
  },
  7: {
    title: "Zenith Meditation App",
    subtitle: "HEALTH & WELLNESS SUITE",
    desc: "Calming audio player, personalized session logging, and modular habit tracker designed to reduce daily stress and cultivate mindfulness.",
    tags: ["Swift", "SwiftUI", "CoreData", "AVFoundation"],
  },
  8: {
    title: "Apex Analytics Dashboard",
    subtitle: "ENTERPRISE METRICS PORTAL",
    desc: "Interactive data visualization platform rendering live sales pipelines, retention funnels, and performance indexes with high speed rendering.",
    tags: ["Next.js", "React Query", "ApexCharts", "Zustand"],
  },
  9: {
    title: "Lumina Dating Network",
    subtitle: "MOBILE SOCIAL EXPERIENCE",
    desc: "Next-gen matching application incorporating audio introductions, calendar scheduling, and profile customization with high-end security.",
    tags: ["React Native", "Zustand", "Express", "MongoDB"],
  },
  10: {
    title: "Aerovista Private Aviation",
    subtitle: "LUXURY FLEET & CHARTER PLATFORM",
    desc: "An ultra-luxury private aviation platform that streamlines on-demand charter bookings, live fleet telemetry, personalized concierge itineraries, and global aircraft management.",
    tags: ["Aviation", "Next.js", "Fleet Telemetry", "TailwindCSS"],
  },
  11: {
    title: "Leaf Meal Delivery",
    subtitle: "HEALTHY FOOD SUBSCRIPTION APP",
    desc: "Organic meal planner, automated calendar dispatch, and delivery path tracking optimized for active and health-conscious lifestyles.",
    tags: ["React Native", "Google Maps API", "Stripe"],
  },
  12: {
    title: "Hydro Web Design",
    subtitle: "INTERACTIVE FLUID MARKETING PORTAL",
    desc: "A marketing portal with high-end fluid simulations, scroll-tied visual feedback, and bespoke vector animations for product launches.",
    tags: ["WebGL", "Three.js", "GSAP", "TailwindCSS"],
  },
  13: {
    title: "Nova Messenger App",
    subtitle: "ENCRYPTED CHAT INTERFACE",
    desc: "Real-time communication suite offering peer-to-peer encryption, offline storage, custom chat styling, and automatic message backup.",
    tags: ["Swift", "WebRTC", "SQLite", "Protobuf"],
  },
  14: {
    title: "Atlas Project Management",
    subtitle: "ENTERPRISE SCRUM PLATFORM",
    desc: "Collab tools including live kanban boards, timeline Gantt charts, file co-authoring, and automated developer pull-request integrations.",
    tags: ["React", "Next.js", "React Flow", "Prisma"],
  },
  15: {
    title: "Solstice Audio App",
    subtitle: "PODCAST & MUSIC STREAMER",
    desc: "Sleek, personalized streaming player with dynamic queue management, cross-device playback synchronization, and offline downloads.",
    tags: ["Kotlin", "Jetpack Compose", "ExoPlayer"],
  },
};

// Base Orbit ellipse dimensions
const RX = 380;
const RY = 260;
const OX = -50; // Orbit center offset from viewport center

// Small card dimensions
const SW = 60;
const SH = 46;
const SBR = 4;
const LBR = 60;

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

// 16 cards evenly distributed around the orbit with curated mockup image assets
const CARDS: CardDef[] = [
  {
    id: 0,
    a: 0,
    fw: 270,
    fh: 168,
    fr: -3,
    bg: ["#0e2a38", "#1a495f", "#2c728e"],
    type: "web",
    imageUrl: "/images/rideone.png",
  },
  {
    id: 1,
    a: 22.5,
    fw: 210,
    fh: 310,
    fr: 5,
    bg: ["#0b1f3c", "#173b70", "#265da8"],
    type: "phone",
    imageUrl: "/images/phone.png",
  },
  {
    id: 2,
    a: 45,
    fw: 260,
    fh: 170,
    fr: -6,
    bg: ["#1c3823", "#2d5a37", "#487e54"],
    type: "phone",
    imageUrl: "/images/dcuverse1.png",
  },
  {
    id: 3,
    a: 67.5,
    fw: 220,
    fh: 300,
    fr: 4,
    bg: ["#241505", "#4a2c0a", "#784b15"],
    type: "phone",
    imageUrl: "/images/travelapp.png",
  },
  {
    id: 4,
    a: 90,
    fw: 280,
    fh: 160,
    fr: -5,
    bg: ["#1c0c2b", "#3d1b5c", "#653194"],
    type: "web",
    imageUrl: "/images/dribbbleattecementlumora.png",
  },
  {
    id: 5,
    a: 112.5,
    fw: 200,
    fh: 320,
    fr: 6,
    bg: ["#0c2527", "#1d4c50", "#2f7b80"],
    type: "phone",
    imageUrl: "/images/travelapptwo.png",
  },
  {
    id: 6,
    a: 135,
    fw: 270,
    fh: 165,
    fr: -4,
    bg: ["#1e2509", "#3f4d17", "#637827"],
    type: "web",
    imageUrl: "/images/fitnessblack1.png",
  },
  {
    id: 7,
    a: 157.5,
    fw: 215,
    fh: 315,
    fr: -5,
    bg: ["#220d2b", "#491e5c", "#7b3699"],
    type: "phone",
    imageUrl: "/images/fitnessblack1.png",
  },
  {
    id: 8,
    a: 180,
    fw: 250,
    fh: 175,
    fr: 3,
    bg: ["#092628", "#155054", "#237e84"],
    type: "web",
    imageUrl: "/images/fintch.png",
  },
  {
    id: 9,
    a: 202.5,
    fw: 230,
    fh: 290,
    fr: -4,
    bg: ["#2d1b09", "#5b3614", "#925722"],
    type: "phone",
    imageUrl: "/images/travelapp-1.png",
  },
  {
    id: 10,
    a: 225,
    fw: 275,
    fh: 162,
    fr: 5,
    bg: ["#151c27", "#2b394f", "#445877"],
    type: "web",
    imageUrl: "/images/dribbbleattecementplane.png",
  },
  {
    id: 11,
    a: 247.5,
    fw: 225,
    fh: 305,
    fr: -6,
    bg: ["#082e1b", "#105d39", "#1b8a53"],
    type: "phone",
    imageUrl: "/images/travelappthree.png",
  },
  {
    id: 12,
    a: 270,
    fw: 270,
    fh: 168,
    fr: 4,
    bg: ["#091d2c", "#123c5c", "#1c5d8c"],
    type: "web",
    imageUrl: "/images/car.png",
  },
  {
    id: 13,
    a: 292.5,
    fw: 210,
    fh: 310,
    fr: -5,
    bg: ["#2b0d1e", "#561a3c", "#872b5f"],
    type: "phone",
    imageUrl: "/images/phone.png",
  },
  {
    id: 14,
    a: 315,
    fw: 260,
    fh: 170,
    fr: 3,
    bg: ["#12230d", "#284d1c", "#417a2e"],
    type: "web",
    imageUrl: "/images/pealesate.png",
  },
  {
    id: 15,
    a: 337.5,
    fw: 220,
    fh: 300,
    fr: -4,
    bg: ["#2c2409", "#594812", "#8c721c"],
    type: "phone",
    imageUrl: "/images/dribbbleattecement.png",
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

      {/* Device mock frame overlay (unused, kept empty to maintain ref mapping) */}
      <div ref={iRef} className="hidden pointer-events-none" />
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function HeroAnimation() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardDef | null>(null);

  // Ref to hold the selected card state so that the event listeners (which are bound on mount) can read the updated state
  const selectedCardRef = useRef<CardDef | null>(null);

  useEffect(() => {
    selectedCardRef.current = selectedCard;
  }, [selectedCard]);

  // Prevent background scroll on body when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCard]);

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
      if (selectedCardRef.current) return; // Prevent scroll interaction when modal is open
      // Prevent default browser scroll to keep page steady
      e.preventDefault();
      targetY += e.deltaY * 0.85; // Natural speed mapping
      if (targetY < 0) targetY = 0; // Return-to-top limit
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (selectedCardRef.current) return; // Prevent scroll interaction when modal is open
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (selectedCardRef.current) return; // Prevent scroll interaction when modal is open
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      targetY += deltaY * 1.5; // Responsive touch drag
      if (targetY < 0) targetY = 0;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCardRef.current) return; // Prevent scroll interaction when modal is open
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
      const width = typeof window !== "undefined" ? window.innerWidth : 1440;
      const height = typeof window !== "undefined" ? window.innerHeight : 900;

      // Activation progress (0 to 1) based on scroll offset from top
      const activationProgress = Math.min(1, smoothY / 150);

      // Determine responsive factors based on screen width
      let scaleFactor = 1.0;
      let adaptiveRX = RX;
      let adaptiveRY = RY;
      let adaptiveOX = OX;
      let shiftX = -200 * activationProgress;
      let orbitOffsetY = 0;

      if (width < 480) {
        // Portrait mobile
        scaleFactor = 0.55;
        adaptiveRX = width * 0.32;
        adaptiveRY = Math.min(130, height * 0.15);
        adaptiveOX = -20;
        shiftX = -40 * activationProgress;
        orbitOffsetY = -60;
      } else if (width < 768) {
        // Landscape mobile / Large mobile
        scaleFactor = 0.65;
        adaptiveRX = width * 0.32;
        adaptiveRY = Math.min(160, height * 0.16);
        adaptiveOX = -30;
        shiftX = -60 * activationProgress;
        orbitOffsetY = -50;
      } else if (width < 1024) {
        // Tablet
        scaleFactor = 0.75;
        adaptiveRX = Math.min(270, width * 0.32);
        adaptiveRY = Math.min(190, height * 0.18);
        adaptiveOX = -40;
        shiftX = -120 * activationProgress;
        orbitOffsetY = -30;
      } else if (width < 1280) {
        // Laptop / Small Desktop
        scaleFactor = 0.85;
        adaptiveRX = 340;
        adaptiveRY = 230;
        adaptiveOX = -50;
        shiftX = -165 * activationProgress;
        orbitOffsetY = 0;
      } else {
        // Desktop / Large screen
        scaleFactor = 1.0;
        adaptiveRX = RX;
        adaptiveRY = RY;
        adaptiveOX = OX;
        shiftX = -200 * activationProgress;
        orbitOffsetY = 0;
      }

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
      const currentOX = adaptiveOX + shiftX;

      cards.forEach((card, i) => {
        const d = CARDS[i];
        const rad = ((d.a + totalAngle) * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        // Map depth smoothly from -1 (far left, smallest) to 1 (far right, largest)
        // This creates a nice progressive scaling around the orbit.
        const depth = (cos + 1) / 2;
        const t = depth * activationProgress;

        // Card size scaling using a uniform card ratio (max size: 342px width by 316px height)
        const targetFW = 342;
        const targetFH = 316;
        const w = SW + (targetFW * scaleFactor - SW) * t;
        const h = SH + (targetFH * scaleFactor - SH) * t;
        const br = SBR + (LBR - SBR) * t;

        // Push active cards outward slightly to frame them nicely and overlap elegantly
        const spread = 1 + t * 0.14;
        const x = currentOX + cos * currentRX * spread;
        const y = orbitOffsetY + sin * currentRY * spread;

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
      if (selectedCardRef.current) return; // Freeze auto-rotation when modal is open
      orbitDeg += 0.16;
      if (orbitDeg >= 360) orbitDeg -= 360;
      render();
    };

    // Call render once on mount to avoid any flash of unpositioned cards
    render();

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
          className="absolute overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] cursor-pointer"
          style={{
            left: "50%",
            top: "50%",
            background: `linear-gradient(145deg, ${card.bg.join(", ")})`,
            willChange: "transform, width, height, z-index",
          }}
          onClick={() => setSelectedCard(card)}
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

      {/* Modal Popup for Project Details */}
      {selectedCard !== null && <ProjectDetailsModal card={selectedCard} onClose={() => setSelectedCard(null)} projectDetails={PROJECT_DETAILS[selectedCard.id]} />}

      {/* Bottom Right: Tagline Text */}
      <div className="absolute bottom-24 right-6 md:bottom-16 md:right-16 lg:right-24 z-20 text-left pointer-events-none select-none max-w-[260px] sm:max-w-[320px] md:max-w-md">
        <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] font-normal text-[#3a3a3a] leading-[1.35] tracking-tight">Elevating Brands Through Memorable Digital Experiences</p>
      </div>
    </div>
  );
}
