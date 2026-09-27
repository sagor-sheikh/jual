"use client";

import React from "react";
import { ArrowUpRight, Mic, Heart, ShieldCheck, Sparkles } from "lucide-react";
import {
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card09LuminaDating() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/travelapp-1.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#201103]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-200 border border-orange-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Voice-First Social & Chemistry Dating
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Lumina Dating Network
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
              Voice Chemistry First
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Lumina eliminates superficial swiping by introducing authentic 15-second voice notes, shared musical tastes, and intentional conversation prompts before photos are revealed.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Designed with end-to-end encrypted messaging, automated voice moderation filters, and a calm, sunset-inspired warm color palette.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Lumina Dating Mobile Prototype...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Voice Matches</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            App Specs
          </h4>
          <ProjectMetaTable
            client="Lumina Social Los Angeles"
            duration="8 Weeks"
            role="Mobile Architect & UX Lead"
            tags={["React Native", "Zustand", "Express", "MongoDB", "WebRTC"]}
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="3.5x" label="Conversation Length" sublabel="Compared to swipe apps" />
        <MetricCard value="82%" label="Date Conversion" sublabel="Matches meeting offline" />
        <MetricCard value="1.2M" label="Voice Prompts Sent" sublabel="In beta launch" />
        <MetricCard value="100%" label="Verified Profiles" sublabel="Biometric selfie check" />
      </div>

      {/* Screen Gallery */}
      <div className="bg-neutral-900 text-white p-8 md:p-14 rounded-3xl mb-16 relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-2 block">
            Interface Walkthrough
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Voice Note Player, Mood Cards & Chat Room
          </h3>
          <p className="text-neutral-400 text-sm mt-3">
            Listen to spontaneous thoughts, answers to funny icebreakers, and discover shared interests organically.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar justify-start md:justify-center">
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapp-1.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapptwo.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelappthree.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Lumina Dating Network" />
    </div>
  );
}
