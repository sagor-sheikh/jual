"use client";

import React from "react";

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

export default function ProjectDetailsModal({ card, onClose, projectDetails }: ProjectDetailsModalProps) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 modal-overlay-anim"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#121413]/95 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row modal-content-anim"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer border-0"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Panel: Mockup Image Preview */}
        <div
          className="w-full md:w-1/2 h-64 md:h-auto min-h-[280px] bg-cover bg-center"
          style={{ backgroundImage: `url(${card.imageUrl})` }}
        />

        {/* Right Panel: Project Specifications & Story */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between text-white font-sans">
          <div>
            {/* Dynamic Category/Tag Badge */}
            <span
              className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-3 border font-sans"
              style={{
                backgroundColor: `${card.bg[1]}30`,
                borderColor: card.bg[2],
                color: card.bg[2],
              }}
            >
              {card.type === "web" ? "Web Platform" : "Mobile App"}
            </span>

            <h2 className="text-2xl font-bold tracking-tight mb-1 text-white font-sans">
              {projectDetails?.title || `Project #${card.id + 1}`}
            </h2>
            
            <p className="text-white/50 text-[10px] font-mono tracking-widest uppercase mb-4">
              {projectDetails?.subtitle || "UX/UI DESIGN CASE STUDY"}
            </p>

            <p className="text-white/85 text-xs md:text-sm leading-relaxed mb-6 font-light font-sans">
              {projectDetails?.desc || "An elegant mockup presenting fluid interfaces, material transitions, and responsive visual architecture."}
            </p>

            {/* Tech Stack Badges */}
            <div className="mb-6">
              <h4 className="text-[10px] font-semibold tracking-wider text-white/40 uppercase mb-2 font-sans">Technologies Used</h4>
              <div className="flex flex-wrap gap-1.5">
                {(projectDetails?.tags || ["React", "CSS", "GSAP"]).map((tag) => (
                  <span key={tag} className="text-[10px] px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-white/70 font-sans">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors cursor-pointer border-0 font-sans"
              onClick={() => alert("Launching live project site...")}
            >
              Launch Demo
            </button>
            <button
              className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-colors cursor-pointer font-sans"
              onClick={() => alert("Loading documentation specifications...")}
            >
              View Specs
            </button>
          </div>
        </div>
      </div>

      {/* Inline styles for custom modal entrance animations */}
      <style>{`
        .modal-overlay-anim {
          animation: modalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .modal-content-anim {
          animation: modalZoomIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes modalFadeIn {
          from { opacity: 0; backdrop-filter: blur(0px); background-color: rgba(0,0,0,0); }
          to { opacity: 1; backdrop-filter: blur(8px); background-color: rgba(0,0,0,0.7); }
        }
        @keyframes modalZoomIn {
          from { transform: scale(0.92) translateY(10px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
