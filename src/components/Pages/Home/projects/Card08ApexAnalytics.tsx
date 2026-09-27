"use client";

import React from "react";
import { ArrowUpRight, BarChart3, TrendingUp, Activity, Database } from "lucide-react";
import {
  BrowserMockup,
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card08ApexAnalytics() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/fintch.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#061b1c]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-200 border border-cyan-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Enterprise Metrics Portal & Real-time Viz
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Apex Analytics Dashboard
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
              Data Infrastructure
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Apex renders millions of live data points for Fortune 500 financial executives, transforming complex ingestion streams into actionable real-time cohort matrices and retention heatmaps.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Engineered with WebGL canvas acceleration, custom aggregation pipelines, and instantaneous drag-and-drop widget customization.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Live Apex Enterprise Sandbox...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Analytics Console</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            Specs
          </h4>
          <ProjectMetaTable
            client="Apex Financial Global NY"
            duration="12 Weeks"
            role="Lead Frontend Architect"
            tags={["Next.js", "React Query", "ApexCharts", "Zustand", "ClickHouse"]}
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="10M+" label="Events / Sec" sublabel="Live ingestion rate" />
        <MetricCard value="15ms" label="Query Latency" sublabel="P99 response time" />
        <MetricCard value="$4.2B" label="Portfolio Tracked" sublabel="Assets under management" />
        <MetricCard value="99.999%" label="SLA Guarantee" sublabel="Fault tolerant cluster" />
      </div>

      {/* Dual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 bg-neutral-50 p-6 md:p-12 rounded-3xl border border-neutral-200/40">
        <div>
          <BrowserMockup imageUrl="/images/productivity.png" url="https://apexanalytics.io/command-center" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest bg-cyan-100 text-cyan-900 uppercase mb-4 w-fit">
            Telemetry Grid
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Custom Visual Heatmaps & Metric Alerts
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
            Configure automated thresholds that trigger PagerDuty alerts and Slack notifications when pipeline deviations exceed tolerance.
          </p>
          <div className="flex justify-center lg:justify-start">
            <PhoneMockup imageUrl="/images/dribbbleattecementlumora.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Apex Analytics Dashboard" />
    </div>
  );
}
