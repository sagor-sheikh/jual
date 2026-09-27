"use client";

import React from "react";
import { ArrowUpRight, ShoppingBag, Leaf, Shield, Globe } from "lucide-react";
import {
  BrowserMockup,
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card02EcoSphere() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/healtcare.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808]/80 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-red-500/20 text-red-200 border border-red-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Sustainable Headless Commerce
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                EcoSphere E-Commerce
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
              Marketplace Narrative
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              EcoSphere redefines the modern sustainable online shopping journey, marrying instant headless Shopify performance with transparent carbon footprint tracking for every product in the cart.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Engineered with sub-50ms page transitions, instantaneous client-side filtering, and automatic Stripe localized checkout currencies across 42 countries.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching EcoSphere Storefront...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Storefront</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            Technical Stack
          </h4>
          <ProjectMetaTable
            client="EcoSphere Retail Nordics"
            duration="4 Weeks"
            role="Fullstack Commerce Architect"
            tags={["Shopify Storefront", "Next.js 15", "TailwindCSS", "Stripe API", "Algolia"]}
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="42%" label="Cart Conversion" sublabel="+18% above industry average" />
        <MetricCard value="0.4s" label="Checkout Load" sublabel="Zero layout shift" />
        <MetricCard value="120K+" label="Monthly Orders" sublabel="Handled smoothly" />
        <MetricCard value="100%" label="Carbon Offset" sublabel="Verified certified offset" />
      </div>

      {/* Dual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 bg-neutral-50 p-6 md:p-12 rounded-3xl border border-neutral-200/40">
        <div>
          <BrowserMockup imageUrl="/images/dribbbleattecementplane.png" url="https://ecosphere.earth/shop" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest bg-amber-100 text-amber-900 uppercase mb-4 w-fit">
            Next-Gen Storefront
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Adaptive Visual Grids & Instant Cart
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
            Shoppers can review fabric origin, carbon scores, and customer unboxing videos directly within a slide-out drawer without leaving the browse view.
          </p>
          <div className="flex justify-center lg:justify-start">
            <PhoneMockup imageUrl="/images/jemi.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="EcoSphere E-Commerce" />
    </div>
  );
}
