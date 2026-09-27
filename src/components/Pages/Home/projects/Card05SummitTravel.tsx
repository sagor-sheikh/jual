"use client";

import React from "react";
import { ArrowUpRight, Compass, Mountain, MapPin, CloudRain } from "lucide-react";
import {
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card05SummitTravel() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/travelapptwo.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#081e20]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-teal-500/20 text-teal-200 border border-teal-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Outdoor Navigation & Offline GPS
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Summit Travel Guide
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
              Expedition Navigator
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Summit guides mountaineers through remote alpine peaks with offline vector contour maps, real-time weather alerts, and satellite SOS breadcrumb tracking.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Engineered with Mapbox GL native tile caching, dynamic altitude sickness warnings, and a community summit badge ledger that syncs once cellular service returns.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Summit Offline Map Explorer...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Download Offline Route</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            App Specifications
          </h4>
          <ProjectMetaTable
            client="Alpine Adventure Club Zurich"
            duration="10 Weeks"
            role="Mobile GIS Lead"
            tags={["React Native", "Mapbox GL", "PostgreSQL", "Node.js", "Turf.js"]}
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="100%" label="Offline Capable" sublabel="Zero cell signal required" />
        <MetricCard value="45,000+" label="Mapped Trails" sublabel="Verified GPS routes" />
        <MetricCard value="0.2m" label="Elevation Accuracy" sublabel="Dual-frequency GPS" />
        <MetricCard value="32 hrs" label="Battery Saver Mode" sublabel="Continuous expedition tracking" />
      </div>

      {/* Mobile Screens */}
      <div className="bg-neutral-900 text-white p-8 md:p-14 rounded-3xl mb-16 relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-2 block">
            Navigation Interface
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Vector Elevation Profile & Beacon Sync
          </h3>
          <p className="text-neutral-400 text-sm mt-3">
            Inspect slope angles, upcoming water stations, and mountain hut availability before ascending.
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
            <PhoneMockup imageUrl="/images/travelapp-1.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Summit Travel Guide" />
    </div>
  );
}
