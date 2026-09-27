"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Card00JuiceAgency() {
  return (
    <div className="max-w-[1240px] mx-auto font-sans text-neutral-800 space-y-12 md:space-y-16 pb-12">
      {/* 1. Hero Showcase Section (rideone.png) */}
      <section className="w-full">
        <div className="w-full overflow-hidden rounded-[22px] md:rounded-[32px] border border-neutral-200/50 shadow-sm bg-[#dbeef4]/40">
          <img
            src="/images/rideone.png"
            alt="Ride Every Wave With Confidence - Desktop Showcase"
            className="w-full h-auto block object-cover"
          />
        </div>
      </section>

      {/* 2. Overview & Details Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-2 pb-4">
        {/* Left Column: Overview Description */}
        <div className="md:col-span-8 flex flex-col justify-start">
          <span className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-3 block">
            Overview
          </span>
          <p className="text-base sm:text-lg md:text-xl font-normal text-neutral-800 leading-relaxed max-w-2xl">
            A modern AI-powered health surf app that helps users monitor their habits, track sports performance with custom swim metrics, track personal and athletic insights and manage outdoor sports all in one place.
          </p>
        </div>

        {/* Right Column: Spec Details */}
        <div className="md:col-span-4">
          <span className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-3 block">
            Details
          </span>
          <div className="divide-y divide-neutral-200/70 border-t border-b border-neutral-200/70 text-xs sm:text-sm">
            <div className="py-3 flex justify-between items-center">
              <span className="text-neutral-400 font-normal">Client</span>
              <span className="font-medium text-neutral-800">10 wave</span>
            </div>
            <div className="py-3 flex justify-between items-center">
              <span className="text-neutral-400 font-normal">Industry</span>
              <span className="font-medium text-neutral-800">Sports</span>
            </div>
            <div className="py-3 flex justify-between items-center">
              <span className="text-neutral-400 font-normal">Year</span>
              <span className="font-medium text-neutral-800">2024 / 2025</span>
            </div>
            <div className="py-3 flex justify-between items-center">
              <span className="text-neutral-400 font-normal">Role</span>
              <span className="font-medium text-neutral-800">Lead UI/UX & Web</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dual Mockup Section (ridetwo.png & ridethree.png) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="w-full overflow-hidden rounded-[20px] md:rounded-[28px] border border-neutral-200/50 shadow-sm bg-neutral-950">
          <img
            src="/images/ridetwo.png"
            alt="Tideline Tablet Interface"
            className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>
        <div className="w-full overflow-hidden rounded-[20px] md:rounded-[28px] border border-neutral-200/50 shadow-sm bg-[#121c24]">
          <img
            src="/images/ridethree.png"
            alt="Beyond The Waves Laptop Screen"
            className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>
      </section>

      {/* 4. Text Row: The Challenge */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-2">
        <div className="md:col-span-4">
          <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight">
            The Challenge
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Designed to deliver a calm, empowering and human-centered healthcare and outdoor surf experience through a modern visual identity that inspired confidence and care.
          </p>
        </div>
      </section>

      {/* 5. Full-width Laptop Collections Showcase (ridefour.png) */}
      <section className="w-full">
        <div className="w-full overflow-hidden rounded-[22px] md:rounded-[32px] border border-neutral-200/50 shadow-sm bg-[#d7e9f1]">
          <img
            src="/images/ridefour.png"
            alt="Surfboard Collections Storefront on Laptop"
            className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.005]"
          />
        </div>
      </section>

      {/* 6. Text Row: Visual Identity */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-2">
        <div className="md:col-span-4">
          <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight">
            Visual Identity
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Designed to deliver a calm, empowering and human-centered surf & ocean experience through a modern visual identity that inspired confidence and care.
          </p>
        </div>
      </section>

      {/* 7. Angled Desktop Monitor Showcase (ridefive.png) */}
      <section className="w-full">
        <div className="w-full overflow-hidden rounded-[22px] md:rounded-[32px] border border-neutral-200/50 shadow-sm bg-[#d3eef5]">
          <img
            src="/images/ridefive.png"
            alt="Every Wave Tells A Story Display"
            className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.005]"
          />
        </div>
      </section>

      {/* 8. Text Row: The Result */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-2">
        <div className="md:col-span-4">
          <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 tracking-tight">
            The Result
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Designed to deliver a calm, empowering and human-centered experience through a modern visual identity that inspired confidence and care.
          </p>
        </div>
      </section>

      {/* 9. User Feedback & Metrics Bento Graphic (ridesix.png) */}
      <section className="w-full">
        <div className="w-full overflow-hidden rounded-[22px] md:rounded-[32px] border border-neutral-200/50 shadow-sm bg-[#f3f4f6]">
          <img
            src="/images/ridesix.png"
            alt="User Feedback and Analytics Dashboard"
            className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.005]"
          />
        </div>
      </section>

      {/* 10. WHAT IS NEXT WAVE? Dual Mockup Cards (rideseven.png & rideeight.jpg) */}
      <section className="space-y-5">
        <h4 className="text-xs sm:text-sm font-bold tracking-widest text-neutral-900 uppercase">
          WHAT IS NEXT WAVE?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="w-full overflow-hidden rounded-[20px] md:rounded-[28px] border border-neutral-200/50 shadow-sm bg-[#e8e9ea]">
            <img
              src="/images/rideseven.png"
              alt="Next-Gen Mobile App Interface Mockup"
              className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
          <div className="w-full overflow-hidden rounded-[20px] md:rounded-[28px] border border-neutral-200/50 shadow-sm bg-[#040806]">
            <img
              src="/images/rideeight.jpg"
              alt="AgentOS AI Automation Platform Dashboard"
              className="w-full h-auto block object-cover transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* 11. Call to Action Banner */}
      <section className="w-full pt-4">
        <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-neutral-950 text-white p-12 sm:p-16 md:p-20 text-center shadow-2xl">
          {/* Subtle wavy backdrop glow / gradient */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-neutral-700/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <span className="text-neutral-400 text-sm sm:text-base md:text-lg font-medium tracking-tight mb-2">
              Ready to shine?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Unlock access today.
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light mb-8">
              Get a personalized demo and start your journey
            </p>
            <button
              onClick={() => alert("Connecting to Ribeca surf platform demo...")}
              className="px-6 py-2.5 bg-white text-neutral-950 rounded-full text-xs font-semibold hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer border-0"
            >
              <span className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 text-neutral-900" />
              </span>
              <span>LET&apos;S TALK</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
