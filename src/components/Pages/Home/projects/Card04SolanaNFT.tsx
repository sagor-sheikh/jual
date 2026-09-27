"use client";

import React from "react";
import { ArrowUpRight, Coins, Zap, Shield, Sparkles } from "lucide-react";
import {
  BrowserMockup,
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card04SolanaNFT() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/dribbbleattecementlumora.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#160824]/90 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-200 border border-purple-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Web3 DApp & High-Speed Exchange
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Solana NFT Marketplace
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
              Web3 Trading Interface
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              A lightning-fast digital art exchange and NFT launchpad engineered for the Solana blockchain. Enabling instant wallet signatures, live floor price orderbooks, and decentralized asset minting.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Built with custom Anchor programs, RPC node caching, and responsive glassmorphic cards optimized for both desktop pro traders and mobile wallet users.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Connecting to Solana Devnet...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Connect Wallet & Trade</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            DApp Specifications
          </h4>
          <ProjectMetaTable
            client="Solana Foundation Ecosystem"
            duration="5 Weeks"
            role="Web3 Lead Architect"
            tags={["Solana Web3.js", "TypeScript", "Anchor", "Next.js", "TailwindCSS"]}
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="400ms" label="Finality Time" sublabel="Instant slot confirmation" />
        <MetricCard value="$18M+" label="Volume Traded" sublabel="First quarter volume" />
        <MetricCard value="0.0002 SOL" label="Avg Gas Fee" sublabel="Ultra-low transaction cost" />
        <MetricCard value="85K+" label="Unique Wallets" sublabel="Connected traders" />
      </div>

      {/* Dual Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 bg-neutral-50 p-6 md:p-12 rounded-3xl border border-neutral-200/40">
        <div>
          <BrowserMockup imageUrl="/images/fintch.png" url="https://solmarket.trade/live-orderbook" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest bg-purple-100 text-purple-900 uppercase mb-4 w-fit">
            Pro Trader Portal
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Depth Charts & Instant Sweeping
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
            Traders can bulk-sweep collection floors in a single atomic transaction bundle with gas priority fee customization.
          </p>
          <div className="flex justify-center lg:justify-start">
            <PhoneMockup imageUrl="/images/productivity.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Solana NFT Marketplace" />
    </div>
  );
}
