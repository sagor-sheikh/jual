"use client";

import React from "react";
import { ChevronDown, ArrowUpRight, Sparkles, Globe, Clock, User, Tag } from "lucide-react";

interface CardDef {
  id: number;
  bg: string[];
  type: "web" | "phone";
  imageUrl: string;
}

interface ProjectDetailsModalProps {
  card: CardDef;
  onClose: () => void;
  projectDetails: {
    title: string;
    subtitle: string;
    desc: string;
    tags: string[];
  };
}

// Rich custom metadata mapping to make "every project different"
const MOCK_PROJECTS_EXTENDED: Record<number, {
  client: string;
  duration: string;
  role: string;
  sectionName: string;
  sectionDesc: string;
  secondaryImages: string[];
  bentoImages: string[];
}> = {
  0: {
    client: "Juice Agency Group",
    duration: "6 Weeks",
    role: "Lead UI/UX & WebGL Dev",
    sectionName: "Brand Identity Design",
    sectionDesc: "Designed to optimize user flow and deliver a premium agency presentation through custom 3D web graphics and fluid typography.",
    secondaryImages: [
      "/images/dribbbleattecement.png",
      "/images/dribbbleattecementlumora.png"
    ],
    bentoImages: [
      "/images/productivity.png",
      "/images/jemi.png"
    ]
  },
  1: {
    client: "Vibe Labs",
    duration: "8 Weeks",
    role: "Product Designer",
    sectionName: "Social App Interface",
    sectionDesc: "Created immersive social connection patterns with custom haptics, gesture-based card navigation, and micro-interactions.",
    secondaryImages: [
      "/images/travelapp.png",
      "/images/travelapp-1.png"
    ],
    bentoImages: [
      "/images/travelapptwo.png",
      "/images/travelappthree.png"
    ]
  },
  2: {
    client: "EcoSphere Retail",
    duration: "4 Weeks",
    role: "Fullstack Developer",
    sectionName: "Headless E-Commerce System",
    sectionDesc: "Engineered high-performance Shopify custom integration with instant cart validation, custom checkouts, and clean product grids.",
    secondaryImages: [
      "/images/dribbblemockup.png",
      "/images/dribbbleattecementplane.png"
    ],
    bentoImages: [
      "/images/jemi.png",
      "/images/fintch.png"
    ]
  },
  3: {
    client: "Aura Smart Home",
    duration: "3 Weeks",
    role: "UI/UX Mobile Designer",
    sectionName: "IoT Ecosystem Dashboard",
    sectionDesc: "Constructed intuitive system control layout showing temperature dials, lighting sliders, and live security cameras with fluid gestures.",
    secondaryImages: [
      "/images/travelapptwo.png",
      "/images/travelappthree.png"
    ],
    bentoImages: [
      "/images/travelapp.png",
      "/images/travelapp-1.png"
    ]
  },
  4: {
    client: "Solana Foundation",
    duration: "5 Weeks",
    role: "Web3 Frontend Engineer",
    sectionName: "DeFi & NFT Platform",
    sectionDesc: "Created decentralized art portal supporting wallet adapters, dynamic transaction status tracking, and decentralized storage.",
    secondaryImages: [
      "/images/fintch.png",
      "/images/jemi.png"
    ],
    bentoImages: [
      "/images/dribbbleattecementlumora.png",
      "/images/productivity.png"
    ]
  },
  5: {
    client: "Summit Outdoors",
    duration: "10 Weeks",
    role: "React Native Lead",
    sectionName: "Vector Map Navigation",
    sectionDesc: "Implemented offline maps, custom vector layers, and hiking path generation algorithm with dynamic GPS updating.",
    secondaryImages: [
      "/images/travelapp-1.png",
      "/images/travelapptwo.png"
    ],
    bentoImages: [
      "/images/travelappthree.png",
      "/images/travelapp.png"
    ]
  },
  6: {
    client: "Chroma Studio",
    duration: "4 Weeks",
    role: "Creative Tech Lead",
    sectionName: "Interactive Landing Page",
    sectionDesc: "Developed custom shaders and WebGL canvas layers reflecting typography distortions, scroll triggers, and mouse hover fluid maps.",
    secondaryImages: [
      "/images/dribbbleattecement.png",
      "/images/productivity.png"
    ],
    bentoImages: [
      "/images/car.png",
      "/images/fintch.png"
    ]
  },
  7: {
    client: "Zenith Meditation Inc.",
    duration: "6 Weeks",
    role: "iOS Developer",
    sectionName: "Wellness Audio Player",
    sectionDesc: "Designed customized sound wave animations, timer utilities, and audio streaming pipeline with offline downloads.",
    secondaryImages: [
      "/images/travelappthree.png",
      "/images/travelapp.png"
    ],
    bentoImages: [
      "/images/travelapp-1.png",
      "/images/travelapptwo.png"
    ]
  },
  8: {
    client: "Apex Enterprise",
    duration: "12 Weeks",
    role: "Frontend UI Specialist",
    sectionName: "Enterprise Metrics Portal",
    sectionDesc: "Constructed high-speed analytics pipeline using custom canvas grids to render hundreds of metrics points in real-time.",
    secondaryImages: [
      "/images/fintch.png",
      "/images/productivity.png"
    ],
    bentoImages: [
      "/images/dribbbleattecementlumora.png",
      "/images/dribbbleattecementplane.png"
    ]
  },
  9: {
    client: "Lumina Dating Network",
    duration: "8 Weeks",
    role: "Mobile Architect",
    sectionName: "Voice Profile Connections",
    sectionDesc: "Integrated audio recorder widgets, profile match animations, and a secure real-time messaging server.",
    secondaryImages: [
      "/images/travelapp-1.png",
      "/images/travelappthree.png"
    ],
    bentoImages: [
      "/images/travelapptwo.png",
      "/images/travelapp.png"
    ]
  },
  10: {
    client: "Nebula Cloud Hosting",
    duration: "4 Weeks",
    role: "Lead Web Developer",
    sectionName: "SaaS Infrastructure Site",
    sectionDesc: "Crafted automated load balancer charts, pricing models, and clean visual documentation for cloud infrastructure developers.",
    secondaryImages: [
      "/images/dribbbleattecementplane.png",
      "/images/jemi.png"
    ],
    bentoImages: [
      "/images/dribbblemockup.png",
      "/images/fintch.png"
    ]
  },
  11: {
    client: "Leaf Organics",
    duration: "5 Weeks",
    role: "UI/UX Mobile Developer",
    sectionName: "Healthy Food Dispatch",
    sectionDesc: "Developed custom delivery maps, calendar scheduling selectors, and a nutrition calculator page with animations.",
    secondaryImages: [
      "/images/travelapp.png",
      "/images/travelapptwo.png"
    ],
    bentoImages: [
      "/images/travelappthree.png",
      "/images/travelapp-1.png"
    ]
  },
  12: {
    client: "Hydro Brand Agency",
    duration: "3 Weeks",
    role: "WebGL Developer",
    sectionName: "Interactive Fluid Marketing",
    sectionDesc: "Developed high-performance dynamic fluid backgrounds reflecting user touch, drag, and mouse click vectors.",
    secondaryImages: [
      "/images/car.png",
      "/images/dribbbleattecement.png"
    ],
    bentoImages: [
      "/images/dribbbleattecementlumora.png",
      "/images/fintch.png"
    ]
  },
  13: {
    client: "Nova Encrypted Ltd",
    duration: "8 Weeks",
    role: "iOS Security Specialist",
    sectionName: "P2P Encrypted Chat",
    sectionDesc: "Constructed local message caches, key exchange screens, and instant push notification bindings.",
    secondaryImages: [
      "/images/travelapp-1.png",
      "/images/travelapptwo.png"
    ],
    bentoImages: [
      "/images/travelappthree.png",
      "/images/travelapp.png"
    ]
  },
  14: {
    client: "Atlas Enterprise",
    duration: "10 Weeks",
    role: "Frontend Dev Lead",
    sectionName: "Enterprise Scrum Interface",
    sectionDesc: "Designed complex gantt chart visualizations, drag-and-drop kanban columns, and automatic task scheduler widgets.",
    secondaryImages: [
      "/images/pealesate.png",
      "/images/productivity.png"
    ],
    bentoImages: [
      "/images/dribbblemockup.png",
      "/images/dribbbleattecement.png"
    ]
  },
  15: {
    client: "Solstice Audio Inc",
    duration: "6 Weeks",
    role: "Android Dev Expert",
    sectionName: "Podcast Streaming Queue",
    sectionDesc: "Designed customized sound wave visualizations, smart queue managers, and offline audio syncing databases.",
    secondaryImages: [
      "/images/travelapptwo.png",
      "/images/travelappthree.png"
    ],
    bentoImages: [
      "/images/travelapp.png",
      "/images/travelapp-1.png"
    ]
  }
};

// Custom Browser Device Mockup Component
function BrowserMockup({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-full bg-[#1c1d1f] rounded-2xl overflow-hidden shadow-xl border border-neutral-200/80 transition-transform duration-300 hover:scale-[1.01]">
      <div className="bg-[#f0f0f3] px-4 py-3 flex items-center gap-2 border-b border-neutral-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="mx-auto w-1/2 max-w-[400px] h-6 rounded bg-white border border-neutral-200/50 flex items-center justify-center text-[10px] text-neutral-400 select-none font-mono">
          https://jcal.design/preview
        </div>
      </div>
      <div className="bg-neutral-50 relative aspect-[16/10] overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-top" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
    </div>
  );
}

// Custom Phone Device Mockup Component
function PhoneMockup({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="relative mx-auto w-[270px] h-[550px] bg-neutral-950 rounded-[44px] p-3.5 shadow-2xl border-[4px] border-neutral-900 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
      {/* Dynamic Island */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 w-28 h-6 bg-black rounded-full flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-neutral-800 absolute right-4" />
      </div>
      {/* Screen */}
      <div className="w-full h-full rounded-[34px] bg-neutral-100 overflow-hidden relative border border-neutral-850">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      {/* Home Indicator Bar */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-black/40 rounded-full z-20" />
    </div>
  );
}

export default function ProjectDetailsModal({ card, onClose, projectDetails }: ProjectDetailsModalProps) {
  const extended = MOCK_PROJECTS_EXTENDED[card.id] || {
    client: "Personal Work",
    duration: "2 Weeks",
    role: "UI/UX & Frontend Dev",
    sectionName: "Visual Concept",
    sectionDesc: "Designed to optimize user flow and deliver a premium experience through custom animations and intuitive components.",
    secondaryImages: [card.imageUrl, card.imageUrl],
    bentoImages: [card.imageUrl, card.imageUrl]
  };

  const details = projectDetails || {
    title: `Project #${card.id + 1}`,
    subtitle: "UX/UI DESIGN CASE STUDY",
    desc: "An elegant mockup presenting fluid interfaces, material transitions, and responsive visual architecture.",
    tags: ["React", "CSS", "GSAP"]
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 modal-overlay-anim"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1440px] h-[90vh] md:h-[95vh] bg-[#fbfbfc] rounded-[32px] overflow-hidden shadow-2xl flex flex-col modal-content-anim border border-neutral-200/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#fbfbfc]/85 backdrop-blur-md z-30 px-6 md:px-10 py-4 md:py-6 flex items-center justify-between border-b border-neutral-200/50">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 animate-pulse" />
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 font-sans">
              {details.title}
            </h2>
          </div>
          
          <button
            className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200/80 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer border-0"
            onClick={onClose}
            aria-label="Close modal"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Project Page */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-12 font-sans text-neutral-800">
          
          {/* Hero Image Section */}
          <div className="mb-10 md:mb-16">
            <div 
              className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/30 transition-all duration-500 hover:shadow-md"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            />
          </div>

          {/* Info Grid (Description & Key Metrics) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24">
            <div className="md:col-span-7 flex flex-col justify-between gap-6">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
                  Description
                </h4>
                <p className="text-lg md:text-2xl font-light text-neutral-800 leading-relaxed font-sans">
                  {details.desc}
                </p>
              </div>
              <div>
                <button
                  className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-0 inline-flex items-center gap-2"
                  onClick={() => alert(`Launching live project site for ${details.title}...`)}
                >
                  <span>Go Live</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="md:col-span-5">
              <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
                Details
              </h4>
              <div className="divide-y divide-neutral-200/60 border-t border-b border-neutral-200/60 font-sans">
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-neutral-400 font-light flex items-center gap-2"><User className="w-4 h-4 text-neutral-300" /> Client</span>
                  <span className="font-semibold text-neutral-850">{extended.client}</span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-neutral-400 font-light flex items-center gap-2"><Clock className="w-4 h-4 text-neutral-300" /> Duration</span>
                  <span className="font-semibold text-neutral-850">{extended.duration}</span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-neutral-400 font-light flex items-center gap-2"><Globe className="w-4 h-4 text-neutral-300" /> Role</span>
                  <span className="font-semibold text-neutral-850">{extended.role}</span>
                </div>
                <div className="py-3.5 flex justify-between items-center text-sm">
                  <span className="text-neutral-400 font-light flex items-center gap-2"><Tag className="w-4 h-4 text-neutral-300" /> Tags</span>
                  <div className="flex flex-wrap gap-1 justify-end max-w-[200px]">
                    {details.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Dual Device Showcase Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24 bg-neutral-50/50 p-6 md:p-12 rounded-3xl border border-neutral-200/20">
            {card.type === "web" ? (
              <>
                <div>
                  <BrowserMockup imageUrl={card.imageUrl} />
                </div>
                <div className="flex flex-col justify-center h-full md:pl-6">
                  <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest bg-neutral-900/5 text-neutral-500 uppercase mb-4 w-fit border border-neutral-200/50">
                    Responsive Showcase
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
                    {extended.sectionName}
                  </h3>
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8">
                    {extended.sectionDesc}
                  </p>
                  <div>
                    <PhoneMockup imageUrl={extended.secondaryImages[0]} />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center h-full md:pr-6 order-2 lg:order-1">
                  <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest bg-neutral-900/5 text-neutral-500 uppercase mb-4 w-fit border border-neutral-200/50">
                    Mobile Experience
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
                    {extended.sectionName}
                  </h3>
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8">
                    {extended.sectionDesc}
                  </p>
                  <div className="flex justify-center">
                    <PhoneMockup imageUrl={extended.secondaryImages[1]} />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <PhoneMockup imageUrl={extended.secondaryImages[0]} />
                </div>
              </>
            )}
          </div>

          {/* Bento Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
            <div 
              className="h-72 md:h-full min-h-[280px] rounded-3xl bg-cover bg-center border border-neutral-200/20 shadow-sm"
              style={{ backgroundImage: `url(${extended.bentoImages[0]})` }}
            />
            <div className="min-h-[280px] rounded-3xl bg-[#0d0f0e] p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-sm">
              {/* Soft colorful gradients inside dark card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                  <Sparkles className="w-5 h-5 text-neutral-100" />
                </div>
                <h4 className="text-lg font-bold tracking-tight text-white mb-2">
                  Premium Visual Excellence
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed font-light">
                  Leveraging a tailored, harmonious color system and high-fidelity screen flows to optimize daily conversion rates and visual satisfaction.
                </p>
              </div>
              <div className="z-10 text-[9px] font-mono tracking-widest text-neutral-500 uppercase mt-4">
                Interactive Grid Suite
              </div>
            </div>
            <div 
              className="h-72 md:h-full min-h-[280px] rounded-3xl bg-cover bg-center border border-neutral-200/20 shadow-sm"
              style={{ backgroundImage: `url(${extended.bentoImages[1]})` }}
            />
          </div>

          {/* Multi-screen App Display (For Phone apps) or SaaS Monitor Display (For Web platforms) */}
          {card.type === "phone" ? (
            <div className="mb-16 md:mb-24">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 mb-2 text-center">
                System Interface Flows
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm max-w-lg mx-auto text-center mb-8 font-light">
                A seamless flow showcase displaying custom animations, user onboarding steps, profiles, and secondary functional views.
              </p>
              <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-4 no-scrollbar -mx-6 md:mx-0 justify-start md:justify-center">
                {[card.imageUrl, extended.secondaryImages[0], extended.secondaryImages[1], extended.bentoImages[0]].map((img, idx) => (
                  <div key={idx} className="flex-shrink-0">
                    <PhoneMockup imageUrl={img} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-16 md:mb-24">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 mb-2 text-center">
                Dashboard Overview
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm max-w-lg mx-auto text-center mb-8 font-light">
                Full width desktop workspace illustrating the core management panels, live datagrids, and navigation structures.
              </p>
              <div className="max-w-[1000px] mx-auto">
                <BrowserMockup imageUrl={extended.bentoImages[1]} />
              </div>
            </div>
          )}

          {/* Bottom Dark CTA Banner */}
          <div className="w-full bg-[#0c0d0c] rounded-[24px] py-12 md:py-20 px-8 text-center text-white relative overflow-hidden shadow-lg">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6">
              <h3 className="text-2xl md:text-4xl font-normal tracking-tight text-white">
                Ready to shine?
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm font-light max-w-md">
                Experience this workspace in full interactivity. Launch the live demo to preview transitions, speeds, and responsive assets.
              </p>
              <button 
                onClick={() => alert(`Launching live demo for ${details.title}...`)}
                className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 hover:scale-[1.03] active:scale-[0.97] transition-all text-xs cursor-pointer border-0 shadow-sm"
              >
                Unlock Access Today
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Inline styles for custom modal entrance animations */}
      <style>{`
        .modal-overlay-anim {
          animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .modal-content-anim {
          animation: modalZoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes modalFadeIn {
          from { opacity: 0; backdrop-filter: blur(0px); background-color: rgba(0,0,0,0); }
          to { opacity: 1; backdrop-filter: blur(12px); background-color: rgba(0,0,0,0.6); }
        }
        @keyframes modalZoomIn {
          from { transform: scale(0.96) translateY(15px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

