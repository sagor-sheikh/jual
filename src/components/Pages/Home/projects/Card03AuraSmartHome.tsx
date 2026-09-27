"use client";

import React from "react";
import { ArrowUpRight, Cpu, Thermometer, ShieldCheck, Wifi } from "lucide-react";
import {
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card03AuraSmartHome() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/travelapp.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1003]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-200 border border-amber-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                IoT Mobile Dashboard & Hardware Control
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Aura Smart Home
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
              Automation Ecosystem
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Aura orchestrates home intelligence into a unified, tactile mobile experience. Control temperature dials, ambient lighting moods, and perimeter security locks with instantaneous responsiveness.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Featuring offline local Bluetooth mesh networking, real-time energy telemetry graphs, and predictive automation presets that learn resident sleeping and work routines.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Aura Smart Home Demo...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Test IoT Controller</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            System Specs
          </h4>
          <ProjectMetaTable
            client="Aura Automation GmbH"
            duration="3 Weeks"
            role="Lead IoT Product Designer"
            tags={["Flutter", "Dart", "MQTT", "WebSockets", "Firebase"]}
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="< 5ms" label="Command Response" sublabel="Zero perceived delay" />
        <MetricCard value="-34%" label="Power Consumption" sublabel="Smart grid balancing" />
        <MetricCard value="250+" label="Supported Devices" sublabel="Zigbee & Matter standard" />
        <MetricCard value="99.99%" label="Local Uptime" sublabel="Fail-safe offline mode" />
      </div>

      {/* Phone Mockup Row */}
      <div className="bg-neutral-900 text-white p-8 md:p-14 rounded-3xl mb-16 relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 block">
            Interface States
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Room Scenes, Climate Ring & Security Log
          </h3>
          <p className="text-neutral-400 text-sm mt-3">
            Switch between Movie Night, Sunset Ambient, and Away Mode with a single fluid touch slider.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar justify-start md:justify-center">
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapptwo.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelappthree.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Aura Smart Home" />
    </div>
  );
}
