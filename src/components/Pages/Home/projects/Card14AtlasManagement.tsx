"use client";

import React from "react";
import { ArrowUpRight, Kanban, Calendar, GitPullRequest, CheckCircle2 } from "lucide-react";
import {
  BrowserMockup,
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card14AtlasManagement() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/pealesate.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b0a]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Enterprise Scrum & Real-time Collaboration
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Atlas Project Management
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
              Workflow Workspace
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Atlas unites distributed software engineering teams with real-time multi-cursor Kanban boards, predictive sprint Gantt timelines, and bi-directional GitHub/GitLab pull request synchronization.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Engineered with CRDT conflict-free collaborative data types, optimistic UI state mutations, and instantaneous keyboard-driven navigation.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Atlas Sprint Workspace...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Atlas Workspace</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            Specs
          </h4>
          <ProjectMetaTable
            client="Atlas Tech Group Berlin"
            duration="10 Weeks"
            role="Lead Frontend Engineer"
            tags={["React", "Next.js", "React Flow", "Prisma", "Yjs CRDT"]}
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="< 20ms" label="Sync Latency" sublabel="Live multi-cursor updates" />
        <MetricCard value="+40%" label="Sprint Velocity" sublabel="Average client boost" />
        <MetricCard value="120K+" label="Tasks Managed / Day" sublabel="Across 4,000 teams" />
        <MetricCard value="99.98%" label="Reliability SLA" sublabel="Enterprise tier" />
      </div>

      {/* Dual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 bg-neutral-50 p-6 md:p-12 rounded-3xl border border-neutral-200/40">
        <div>
          <BrowserMockup imageUrl="/images/productivity.png" url="https://atlas.work/app/sprints/board-active" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest bg-emerald-100 text-emerald-900 uppercase mb-4 w-fit">
            Sprint Board
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Interactive Kanban Columns & Automated Triggers
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
            Drag cards across columns with smooth layout animations. Merging a PR automatically advances cards to QA and notifies Slack.
          </p>
          <div className="flex justify-center lg:justify-start">
            <PhoneMockup imageUrl="/images/dribbblemockup.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Atlas Project Management" />
    </div>
  );
}
