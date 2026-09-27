"use client";

import React from "react";
import { ArrowUpRight, Moon, Heart, Smile, Volume2 } from "lucide-react";
import {
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card07ZenithMeditation() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/travelappthree.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b0922]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Health & Wellness Mindfulness Suite
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Zenith Meditation App
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
              Mindfulness Concept
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Zenith offers an oasis of calm designed to reduce cortisol and encourage restorative rest through biofeedback soundscapes, breathing pacing rings, and sleep tracking.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Crafted in native SwiftUI with custom CoreAudio spatial engines and gentle haptic pulses timed to 4-7-8 breathing cycles.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Starting 5-Minute Guided Session...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Begin Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            Specs
          </h4>
          <ProjectMetaTable
            client="Zenith Mindfulness Group Kyoto"
            duration="6 Weeks"
            role="Lead iOS & Audio Engineer"
            tags={["Swift", "SwiftUI", "CoreAudio", "HealthKit", "AVFoundation"]}
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="18M+" label="Minutes Meditated" sublabel="Cumulative community time" />
        <MetricCard value="88%" label="Reported Better Sleep" sublabel="Clinically evaluated" />
        <MetricCard value="Apple Design" label="Award Nominee" sublabel="Best Wellness App" />
        <MetricCard value="0 ads" label="Clean Experience" sublabel="Zero tracking or interruption" />
      </div>

      {/* Screen Gallery */}
      <div className="bg-neutral-900 text-white p-8 md:p-14 rounded-3xl mb-16 relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 mb-2 block">
            Inner Calm
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Soundscape Synthesizer & Sleep Analytics
          </h3>
          <p className="text-neutral-400 text-sm mt-3">
            Mix rain on moss, Tibetan singing bowls, and delta binaural waves to suit your exact mood.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar justify-start md:justify-center">
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelappthree.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapp.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapp-1.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Zenith Meditation App" />
    </div>
  );
}
