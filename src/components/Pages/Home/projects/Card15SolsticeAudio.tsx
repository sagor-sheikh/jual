"use client";

import React from "react";
import { ArrowUpRight, Music2, Radio, Sliders, Headphones } from "lucide-react";
import {
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card15SolsticeAudio() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/healtcare.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#201906]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-200 border border-yellow-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Hi-Res Lossless Audio & Spatial Podcast Streamer
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Solstice Audio App
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
              Acoustic Fidelity
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Solstice delivers master-quality 24-bit 192kHz lossless audio, intelligent podcast chapter markers with time-synced transcripts, and synchronized collaborative listening queues.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Engineered with Jetpack Compose, ExoPlayer native audio buffer optimizations, and customizable 10-band parametric equalizers tuned for studio headphone monitors.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Solstice Hi-Res Player...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Preview Lossless Stream</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            Specs
          </h4>
          <ProjectMetaTable
            client="Solstice Audio Media London"
            duration="6 Weeks"
            role="Lead Android Audio Engineer"
            tags={["Kotlin", "Jetpack Compose", "ExoPlayer", "Room DB", "WebSockets"]}
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="24-bit" label="Lossless FLAC" sublabel="192 kHz sample rate" />
        <MetricCard value="0.1 sec" label="Instant Playback" sublabel="Pre-cached audio pipeline" />
        <MetricCard value="1.8M" label="Subscribers" sublabel="Audiophiles worldwide" />
        <MetricCard value="10-Band" label="Equalizer Engine" sublabel="Parametric hardware DSP" />
      </div>

      {/* Screen Gallery */}
      <div className="bg-neutral-900 text-white p-8 md:p-14 rounded-3xl mb-16 relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 mb-2 block">
            Player Experience
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Waveform Visualizer & Spatial Equalizer
          </h3>
          <p className="text-neutral-400 text-sm mt-3">
            Watch real-time spectral frequency meters pulsate with album artwork color extraction.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar justify-start md:justify-center">
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapptwo.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelappthree.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapp.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Solstice Audio App" />
    </div>
  );
}
