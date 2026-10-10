"use client";

import React from "react";

// Dotted Globe / Circle Logo
const DottedGlobe = ({ className = "", size = 18 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    {/* Center dot */}
    <circle cx="12" cy="12" r="1.2" />

    {/* Inner ring (r=4.5) */}
    <circle cx="16.5" cy="12" r="1" />
    <circle cx="14.25" cy="15.9" r="1" />
    <circle cx="9.75" cy="15.9" r="1" />
    <circle cx="7.5" cy="12" r="1" />
    <circle cx="9.75" cy="8.1" r="1" />
    <circle cx="14.25" cy="8.1" r="1" />

    {/* Outer ring (r=8.5) */}
    <circle cx="20.5" cy="12" r="0.8" />
    <circle cx="19.36" cy="16.25" r="0.8" />
    <circle cx="16.25" cy="19.36" r="0.8" />
    <circle cx="12" cy="20.5" r="0.8" />
    <circle cx="7.75" cy="19.36" r="0.8" />
    <circle cx="4.64" cy="16.25" r="0.8" />
    <circle cx="3.5" cy="12" r="0.8" />
    <circle cx="4.64" cy="7.75" r="0.8" />
    <circle cx="7.75" cy="4.64" r="0.8" />
    <circle cx="12" cy="3.5" r="0.8" />
    <circle cx="16.25" cy="4.64" r="0.8" />
    <circle cx="19.36" cy="7.75" r="0.8" />
  </svg>
);

export default function Card09LuminaDating() {
  return (
    <div className="max-w-[1440px] mx-auto font-sans text-neutral-800">
      {/* 1. Hero Showcase Section (security1.jpg) */}
      <div className="w-full mb-12 md:mb-14 lg:mb-20">
        <div className="w-full overflow-hidden rounded-[22px] md:rounded-[32px] border border-neutral-200/50 shadow-sm bg-[#0b0f19]">
          <img
            src="/images/security1.jpg"
            alt="Security Operations Center & Threat Intelligence Dashboard"
            className="w-full h-auto block object-cover"
          />
        </div>
      </div>

      {/* 2. Overview & Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pb-30 lg:pb-50">
        {/* Left Column: Overview Description */}
        <div className="md:col-span-8 flex flex-col justify-start">
          <span className="text-base lg:text-lg font-medium tracking-wider text-black uppercase mb-6 lg:mb-8 block">
            Introduction
          </span>
          <p className="text-xl md:text-2xl lg:text-[28px] font-normal text-black/80 leading-relaxed max-w-2xl mb-8">
            An enterprise-grade AI cybersecurity platform that monitors threat telemetry, automates incident triage with real-time SOC workflows, and protects mission-critical cloud infrastructure worldwide.
          </p>
          <div>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-chatbot"));
                }
              }}
              className="px-7 py-3.5 bg-[#111111] hover:bg-black text-white rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.25)] cursor-pointer inline-flex items-center gap-2"
            >
              <span>Live Site</span>
            </button>
          </div>
        </div>

        {/* Right Column: Spec Details */}
        <div className="md:col-span-4">
          <span className="text-base lg:text-lg font-medium tracking-wider text-black uppercase mb-6 lg:mb-8 block">
            Details
          </span>
          <div className="divide-y divide-neutral-200/70 border-t border-b border-neutral-200/70 text-xs sm:text-sm">
            <div className="py-3 lg:py-4 flex justify-between items-center">
              <span className="text-black/70 font-normal">Client</span>
              <span className="font-normal text-black">Aegis AI</span>
            </div>
            <div className="py-3 lg:py-4 flex justify-between items-center">
              <span className="text-black/70 font-normal">Industry</span>
              <span className="font-normal text-black">Cybersecurity</span>
            </div>
            <div className="py-3 lg:py-4 flex justify-between items-center">
              <span className="text-black/70 font-normal">Year</span>
              <span className="font-normal text-black">2025 / 2026</span>
            </div>
            <div className="py-3 lg:py-4 flex justify-between items-center">
              <span className="text-black/70 font-normal">Role</span>
              <span className="font-normal text-black">Lead UI/UX &amp; Web</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Dual Mockup Section (security2.png & security3.png) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-14 md:mb-18 lg:mb-28">
        <div className="w-full overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[40px] border border-neutral-200/50 shadow-sm bg-[#0c1017]">
          <img
            src="/images/security2.png"
            alt="Incident Health Score & Active Cases"
            className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>
        <div className="w-full overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[40px] border border-neutral-200/50 shadow-sm bg-[#0c1017]">
          <img
            src="/images/security3.png"
            alt="AI Threat Investigation & Attribution"
            className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>
      </div>

      {/* 4. Text Row: Brand Identity */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start mb-10 md:mb-12 lg:mb-15">
        <div className="md:col-span-4">
          <h3 className="text-base md:text-lg font-medium text-black tracking-tight">
            Brand Identity
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-2xl lg:text-[28px] text-black/80 leading-relaxed max-w-2xl">
            Designed to deliver a modern, high-precision, and mission-critical cybersecurity experience through an authoritative visual language that inspires confidence and institutional trust.
          </p>
        </div>
      </div>

      {/* 5. Incidents Management Showcase (security4.png) */}
      <div className="w-full mb-16 md:mb-20 lg:mb-30">
        <div className="w-full overflow-hidden rounded-[22px] md:rounded-4xl border border-neutral-200/50 shadow-sm bg-[#0e131f]">
          <img
            src="/images/security4.png"
            alt="Incident Management and Resolution Workflow"
            className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.005]"
          />
        </div>
      </div>

      {/* 6. Text Row: Platform Experience */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start mb-10 md:mb-12 lg:mb-15">
        <div className="md:col-span-4">
          <h3 className="text-base md:text-lg font-medium text-black tracking-tight">
            Platform Experience
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-2xl lg:text-[28px] text-black/80 leading-relaxed max-w-2xl">
            Empowering Security Operations Centers with AI-assisted incident triage, lightning-fast threat resolution pipelines, and real-time telemetry analytics.
          </p>
        </div>
      </div>

      {/* 7. Aegis AI Showcase (security5.png) */}
      <div className="w-full mb-16 md:mb-20 lg:mb-30">
        <div className="w-full overflow-hidden rounded-[22px] md:rounded-[32px] border border-neutral-200/50 shadow-sm bg-[#0b0f19]">
          <img
            src="/images/security5.png"
            alt="Aegis AI Threat Detection Platform"
            className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.005]"
          />
        </div>
      </div>

      {/* 8. Text Row: The Result */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start mb-10 md:mb-12 lg:mb-15">
        <div className="md:col-span-4">
          <h3 className="text-base md:text-lg font-medium text-black tracking-tight">
            The Result
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-2xl lg:text-[28px] text-black/80 leading-relaxed max-w-2xl">
            A cohesive design architecture combining deep security analytics, automated response workflows, and human-centric clarity for modern security teams.
          </p>
        </div>
      </div>

      {/* 9. User Feedback & Metrics Bento Graphic (security6.png) */}
      <div className="w-full mb-16 md:mb-20 lg:mb-30">
        <div className="w-full overflow-hidden rounded-[22px] md:rounded-[32px] border border-neutral-200/50 shadow-sm bg-[#fcfbfa]">
          <img
            src="/images/security6.png"
            alt="User Feedback and Analytics Dashboard"
            className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.005]"
          />
        </div>
      </div>

      {/* 10. Want to see More? Dual Mockup Cards (security7.jpg & security8.png) */}
      <div className="mb-16 md:mb-20 lg:mb-30">
        <h4 className="text-[28px] lg:text-[32px] font-medium tracking-widest text-black mb-12 lg:mb-15">
          Want to see More?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="w-full overflow-hidden rounded-[20px] md:rounded-[28px] border border-neutral-200/50 shadow-sm bg-[#e8e9ea]">
            <img
              src="/images/security7.jpg"
              alt="Related Project Showcase Mockup"
              className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
          <div className="w-full overflow-hidden rounded-[20px] md:rounded-[28px] border border-neutral-200/50 shadow-sm bg-[#040806]">
            <img
              src="/images/security8.png"
              alt="Mobile Application Interface Mockup"
              className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>

      {/* 11. Call to Action Banner */}
      <div className="w-full">
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-black text-white text-center py-20 sm:py-28 md:py-36 px-6 sm:px-8 flex flex-col items-center justify-center min-h-[420px] md:min-h-[500px]">
          {/* Background Image */}
          <img
            src="/images/unlockbg.png"
            alt="Unlock Access Background"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-[#808086] text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight mb-1 sm:mb-2">
              Ready to shine?
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal md:font-medium tracking-tight text-white mb-4 sm:mb-5">
              Unlock access today.
            </h2>
            <p className="text-[#8e8e93] text-xs sm:text-sm md:text-base font-normal mb-8 sm:mb-10 text-center tracking-tight max-w-lg">
              Let&apos;s build a company your are proud of together.
            </p>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-chatbot"));
                }
              }}
              className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#ececf0] hover:bg-white text-neutral-900 rounded-full text-xs sm:text-sm font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)] inline-flex items-center gap-2.5 cursor-pointer border border-white/50"
            >
              <DottedGlobe size={18} className="text-neutral-900" />
              <span>Let&apos;s work together</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
