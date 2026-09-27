"use client";

import React from "react";
import { ArrowUpRight, Cloud, Server, Shield, Terminal } from "lucide-react";
import {
  BrowserMockup,
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card10NebulaCloud() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/dribbbleattecementplane.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d141e]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-slate-500/20 text-slate-200 border border-slate-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                SaaS Infrastructure & Cloud Edge Management
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Nebula Cloud Hosting
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
              Infrastructure Experience
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Nebula provides high-performance serverless deployment pipelines, global edge routing, and instant database branching for engineering organizations.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Featuring dynamic bandwidth telemetry, zero-downtime rollback controls, and interactive CLI documentation with automated copy-paste terminal snippets.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Nebula Cloud Deploy Console...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Deploy Instant Cluster</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            Specs
          </h4>
          <ProjectMetaTable
            client="Nebula Systems Seattle"
            duration="4 Weeks"
            role="Lead Web Developer & System Designer"
            tags={["Next.js", "TailwindCSS", "TypeScript", "MDX", "GraphQL"]}
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="< 10ms" label="Global Edge Latency" sublabel="Across 280 PoPs" />
        <MetricCard value="99.999%" label="Uptime Guarantee" sublabel="Zero failover downtime" />
        <MetricCard value="3.2M" label="Deploys / Day" sublabel="Continuous delivery" />
        <MetricCard value="1-Click" label="Rollback Speed" sublabel="Zero config setup" />
      </div>

      {/* Dual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 bg-neutral-50 p-6 md:p-12 rounded-3xl border border-neutral-200/40">
        <div>
          <BrowserMockup imageUrl="/images/jemi.png" url="https://nebula.cloud/clusters/region-eu-central" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest bg-slate-200 text-slate-800 uppercase mb-4 w-fit">
            DevOps Console
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Edge Routing & Live Resource Graphs
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
            Engineers can view real-time memory pressure, network ingress, and auto-scale replicas directly from a responsive dashboard.
          </p>
          <div className="flex justify-center lg:justify-start">
            <PhoneMockup imageUrl="/images/dribbblemockup.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Nebula Cloud Hosting" />
    </div>
  );
}
