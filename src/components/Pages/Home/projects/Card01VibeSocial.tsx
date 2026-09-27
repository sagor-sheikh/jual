"use client";

import React from "react";
import { ArrowUpRight, Zap, Users, MessageSquare, Heart } from "lucide-react";
import {
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card01VibeSocial() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/phone.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/80 via-[#0a1220]/20 to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Mobile App & Creator Social
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Vibe Social App
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
              Product Overview
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Vibe is a fluid, gesture-first mobile platform built for modern content creators to stream, collaborate, and share curated soundbites and creative reels with instant haptic responsiveness.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Designed around sleek dark-mode aesthetics with modular audio cards, spatial audio profiles, and dynamic multi-stream room interactions powered by WebSockets and state machines.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Vibe App Interactive Prototype...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Launch Prototype</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            System Specs
          </h4>
          <ProjectMetaTable
            client="Vibe Social Labs Inc."
            duration="8 Weeks"
            role="Product Designer & Mobile Dev"
            tags={["React Native", "Expo", "Framer Motion", "Zustand", "WebSockets"]}
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="2.4M" label="Active Creators" sublabel="Daily active users" />
        <MetricCard value="12ms" label="Audio Latency" sublabel="Real-time WebRTC" />
        <MetricCard value="4.9/5" label="App Store Rating" sublabel="Over 14,000 reviews" />
        <MetricCard value="98.7%" label="Session Retention" sublabel="Month 1 benchmark" />
      </div>

      {/* Multi-Device Mobile Interface Showcase */}
      <div className="bg-neutral-900 text-white p-8 md:p-14 rounded-3xl mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 block">
            Interface Walkthrough
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Seamless Gesture Feed & Live Audio Rooms
          </h3>
          <p className="text-neutral-400 text-sm mt-3">
            Swipe left to join live conversations, tap to bookmark audio stems, and effortlessly broadcast high-fidelity spatial feeds.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar justify-start md:justify-center">
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/phone.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapp.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapp-1.png" />
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/60">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-neutral-900 mb-1">Instant Haptics</h4>
          <p className="text-neutral-500 text-xs leading-relaxed">
            Custom vibrational frequencies matched to music beats and live reaction pulses for unmatched physical immersion.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/60">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <Users className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-neutral-900 mb-1">Creator Cohorts</h4>
          <p className="text-neutral-500 text-xs leading-relaxed">
            Invite-only backstage channels where verified artists exchange sample packs and schedule joint broadcast streams.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/60">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-neutral-900 mb-1">Spatial Audio Engine</h4>
          <p className="text-neutral-500 text-xs leading-relaxed">
            Dynamic binaural audio panning lets listeners perceive where each speaker is sitting in the virtual conference round.
          </p>
        </div>
      </div>

      <ProjectCTA projectTitle="Vibe Social App" />
    </div>
  );
}
