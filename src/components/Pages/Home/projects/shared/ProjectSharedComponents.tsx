"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

// Reusable Browser Mockup Frame
export function BrowserMockup({
  imageUrl,
  url = "https://jcal.design/preview",
  className = "",
}: {
  imageUrl: string;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full bg-[#1c1d1f] rounded-2xl overflow-hidden shadow-xl border border-neutral-200/80 transition-transform duration-300 hover:scale-[1.01] ${className}`}
    >
      <div className="bg-[#f0f0f3] px-4 py-3 flex items-center gap-2 border-b border-neutral-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="mx-auto w-1/2 max-w-[400px] h-6 rounded bg-white border border-neutral-200/50 flex items-center justify-center text-[10px] text-neutral-400 select-none font-mono">
          {url}
        </div>
      </div>
      <div className="bg-neutral-50 relative aspect-[16/10] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-top transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
    </div>
  );
}

// Reusable Phone Mockup Frame
export function PhoneMockup({
  imageUrl,
  className = "",
}: {
  imageUrl: string;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-[270px] h-[550px] bg-neutral-950 rounded-[44px] p-3.5 shadow-2xl border-[4px] border-neutral-900 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* Dynamic Island */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 w-28 h-6 bg-black rounded-full flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-neutral-800 absolute right-4" />
      </div>
      {/* Screen */}
      <div className="w-full h-full rounded-[34px] bg-neutral-100 overflow-hidden relative border border-neutral-800">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      {/* Home Indicator Bar */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-black/40 rounded-full z-20" />
    </div>
  );
}

// Reusable Project Meta Table
export function ProjectMetaTable({
  client,
  duration,
  role,
  tags,
}: {
  client: string;
  duration: string;
  role: string;
  tags: string[];
}) {
  return (
    <div className="divide-y divide-neutral-200/60 border-t border-b border-neutral-200/60 font-sans">
      <div className="py-3.5 flex justify-between items-center text-sm">
        <span className="text-neutral-400 font-light">Client</span>
        <span className="font-semibold text-neutral-800">{client}</span>
      </div>
      <div className="py-3.5 flex justify-between items-center text-sm">
        <span className="text-neutral-400 font-light">Duration</span>
        <span className="font-semibold text-neutral-800">{duration}</span>
      </div>
      <div className="py-3.5 flex justify-between items-center text-sm">
        <span className="text-neutral-400 font-light">Role</span>
        <span className="font-semibold text-neutral-800">{role}</span>
      </div>
      <div className="py-3.5 flex justify-between items-center text-sm">
        <span className="text-neutral-400 font-light">Tech Stack</span>
        <div className="flex flex-wrap gap-1 justify-end max-w-[220px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Metric Card
export function MetricCard({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="bg-neutral-50/70 p-6 rounded-2xl border border-neutral-200/50 flex flex-col justify-between">
      <span className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
        {value}
      </span>
      <div className="mt-2">
        <p className="text-xs font-semibold text-neutral-800 uppercase tracking-wide">
          {label}
        </p>
        {sublabel && (
          <p className="text-[11px] text-neutral-400 mt-0.5">{sublabel}</p>
        )}
      </div>
    </div>
  );
}

// Reusable Project Bottom CTA
export function ProjectCTA({
  title = "Ready to build something iconic?",
  desc = "Experience this project in full interactive fidelity. Contact our engineering and design team to kickstart your next vision.",
  projectTitle,
}: {
  title?: string;
  desc?: string;
  projectTitle: string;
}) {
  return (
    <div className="w-full bg-[#0c0d0c] rounded-[24px] py-12 md:py-16 px-8 text-center text-white relative overflow-hidden shadow-lg mt-12 md:mt-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-5">
        <h3 className="text-2xl md:text-4xl font-normal tracking-tight text-white">
          {title}
        </h3>
        <p className="text-neutral-400 text-xs md:text-sm font-light max-w-md">
          {desc}
        </p>
        <button
          onClick={() => alert(`Launching live demo for ${projectTitle}...`)}
          className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 hover:scale-[1.03] active:scale-[0.97] transition-all text-xs cursor-pointer border-0 shadow-sm inline-flex items-center gap-2"
        >
          <span>Explore Live Experience</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
