"use client";

import React from "react";
import { ChevronDown, X } from "lucide-react";
import { PROJECT_PAGE_COMPONENTS } from "./projects";

interface CardDef {
  id: number;
  bg: string[];
  type: "web" | "phone";
  imageUrl: string;
}

interface ProjectDetailsModalProps {
  card: CardDef;
  onClose: () => void;
  projectDetails?: {
    title: string;
    subtitle: string;
    desc: string;
    tags: string[];
  };
}

export default function ProjectDetailsModal({
  card,
  onClose,
  projectDetails,
}: ProjectDetailsModalProps) {
  // Select the dedicated inner component created specifically for this card
  const DedicatedProjectPage = PROJECT_PAGE_COMPONENTS[card.id];

  const title = projectDetails?.title || `Project #${card.id + 1}`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-8 modal-overlay-anim"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1440px] h-[92vh] md:h-[95vh] bg-[#fbfbfc] rounded-[28px] md:rounded-[36px] overflow-hidden shadow-2xl flex flex-col modal-content-anim border border-neutral-200/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Title and Close Button */}
        <div className="sticky top-0 bg-[#fbfbfc]/90 backdrop-blur-md z-30 px-6 md:px-10 py-4 md:py-5 flex items-center justify-between border-b border-neutral-200/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 animate-pulse" />
            <h2 className="text-lg md:text-2xl font-bold tracking-tight text-neutral-900 font-sans">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer border-0"
              onClick={onClose}
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Inner Page Component Body */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-12 font-sans text-neutral-800">
          {DedicatedProjectPage ? (
            <DedicatedProjectPage />
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-xl font-bold text-neutral-700">Project Details</h3>
              <p className="text-neutral-400 mt-2">No inner component found for this card.</p>
            </div>
          )}
        </div>
      </div>

      {/* Custom modal animations */}
      <style>{`
        .modal-overlay-anim {
          animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .modal-content-anim {
          animation: modalZoomIn 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
            background-color: rgba(0, 0, 0, 0);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(12px);
            background-color: rgba(0, 0, 0, 0.65);
          }
        }
        @keyframes modalZoomIn {
          from {
            transform: scale(0.95) translateY(20px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
