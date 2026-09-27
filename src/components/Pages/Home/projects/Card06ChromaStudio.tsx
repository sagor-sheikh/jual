"use client";

import React from "react";
import { ArrowUpRight, Palette, Film, Sparkles, Monitor } from "lucide-react";
import {
  BrowserMockup,
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card06ChromaStudio() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/productivity.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#141a06]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-lime-500/20 text-lime-200 border border-lime-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Interactive Exhibition & Editorial Studio
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Chroma Creative Studio
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Case Overview & Metadata */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16">
        <div className="md:col-span-7 flex flex-col justify-between gap-6">
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
              Studio Vision
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Chroma operates at the intersection of haute couture photography, interactive canvas physics, and cinematic sound design.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              We developed custom fragment shaders that dynamically warp typographic blocks in response to scroll velocity and sound spectrum analysis.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Chroma Virtual Exhibition...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Enter Exhibition</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            Specs
          </h4>
          <ProjectMetaTable
            client="Chroma Media Tokyo & London"
            duration="4 Weeks"
            role="Creative Tech Lead"
            tags={["Three.js", "GLSL Shaders", "GSAP ScrollTrigger", "Sass", "Web Audio API"]}
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="120 FPS" label="Pro Display XDR" sublabel="Hardware synchronized" />
        <MetricCard value="3.8M" label="Global Visitors" sublabel="Exhibition duration" />
        <MetricCard value="FWA of Day" label="Recognition" sublabel="Favorite Website Awards" />
        <MetricCard value="4K" label="Video Streaming" sublabel="Adaptive HLS pipeline" />
      </div>

      {/* Dual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 bg-neutral-50 p-6 md:p-12 rounded-3xl border border-neutral-200/40">
        <div>
          <BrowserMockup imageUrl="/images/car.png" url="https://chroma.studio/gallery/automotive" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest bg-lime-100 text-lime-900 uppercase mb-4 w-fit">
            Exhibition Cinema
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Fluid Motion & Typography Distortion
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
            Visitors control the cinematic spotlight by dragging across the canvas, unveiling hidden artist notes and audio stems.
          </p>
          <div className="flex justify-center lg:justify-start">
            <PhoneMockup imageUrl="/images/dribbbleattecement.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Chroma Creative Studio" />
    </div>
  );
}
