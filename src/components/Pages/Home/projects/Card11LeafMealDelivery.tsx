"use client";

import React from "react";
import { ArrowUpRight, Utensils, Clock, Heart, Bike } from "lucide-react";
import {
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card11LeafMealDelivery() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/travelapp.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#062013]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-green-500/20 text-green-200 border border-green-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Farm-to-Table Subscription & Macro Nutrition
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Leaf Meal Delivery
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
              Culinary Experience
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Leaf delivers chef-crafted organic meals tailored to your personal dietary goals, with live bicycle courier telemetry and automated weekly menu swaps.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Built with an intuitive calorie and macro nutrient tracker, frictionless Apple Pay subscriptions, and compostable packaging pickup scheduling.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Leaf Meal Box Builder...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Build Weekly Meal Box</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            Specs
          </h4>
          <ProjectMetaTable
            client="Leaf Organics Toronto"
            duration="5 Weeks"
            role="Mobile UI/UX Specialist"
            tags={["React Native", "Google Maps API", "Stripe Checkout", "Node.js"]}
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="100%" label="Organic Certified" sublabel="Locally sourced farms" />
        <MetricCard value="28 min" label="Avg Delivery Time" sublabel="Zero emissions bike courier" />
        <MetricCard value="45K+" label="Active Subscribers" sublabel="Weekly meal plans" />
        <MetricCard value="4.9★" label="Customer Rating" sublabel="Top rated food app" />
      </div>

      {/* Screen Gallery */}
      <div className="bg-neutral-900 text-white p-8 md:p-14 rounded-3xl mb-16 relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-green-400 mb-2 block">
            Mobile Ordering Flow
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Dietary Filters, Live Courier Map & Macro Tracker
          </h3>
          <p className="text-neutral-400 text-sm mt-3">
            Easily toggle vegan, keto, or gluten-free options and track your courier arriving in real time.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar justify-start md:justify-center">
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapp.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapptwo.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapp-1.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Leaf Meal Delivery" />
    </div>
  );
}
