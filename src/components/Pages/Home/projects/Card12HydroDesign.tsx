"use client";

import React from "react";
import { ArrowUpRight, Droplet, Wind, Gauge, Compass } from "lucide-react";
import {
  BrowserMockup,
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card12HydroDesign() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/car.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#06141f]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-sky-500/20 text-sky-200 border border-sky-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Luxury EV Mobility & Aerodynamic WebGL
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Hydro Web Design
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
              Automotive Innovation
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Hydro sets the standard for next-generation electric vehicle marketing, blending interactive 3D aerodynamic wind tunnel simulations with bespoke configurator tools.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Crafted with WebGL 2.0 particle fluids, real-time paint reflectivity, and smooth scroll-tied narrative storytelling that highlights speed, range, and environmental sustainability.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching 3D Vehicle Configurator...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Launch 3D Configurator</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            Specs
          </h4>
          <ProjectMetaTable
            client="Hydro Automotive Oslo"
            duration="3 Weeks"
            role="Creative WebGL Developer"
            tags={["WebGL", "Three.js", "GSAP", "TailwindCSS", "GLTF Shaders"]}
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="0.19 Cd" label="Drag Coefficient" sublabel="Simulated in browser" />
        <MetricCard value="680 km" label="Estimated Range" sublabel="Interactive calculator" />
        <MetricCard value="2.1s" label="0-100 km/h" sublabel="Dual motor benchmark" />
        <MetricCard value="60 FPS" label="Configurator Speed" sublabel="Smooth WebGL canvas" />
      </div>

      {/* Dual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 bg-neutral-50 p-6 md:p-12 rounded-3xl border border-neutral-200/40">
        <div>
          <BrowserMockup imageUrl="/images/dribbbleattecement.png" url="https://hydro-ev.com/configurator/aeroblade" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest bg-sky-100 text-sky-900 uppercase mb-4 w-fit">
            Virtual Showroom
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Custom Finishes & Interior Leather Simulation
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
            Rotate the vehicle in real-time, toggle headlights, open gull-wing doors, and inspect chassis battery distribution.
          </p>
          <div className="flex justify-center lg:justify-start">
            <PhoneMockup imageUrl="/images/fintch.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Hydro Web Design" />
    </div>
  );
}
