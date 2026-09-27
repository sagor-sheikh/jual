"use client";

import React from "react";
import { ArrowUpRight, Lock, Shield, EyeOff, Key } from "lucide-react";
import {
  PhoneMockup,
  ProjectMetaTable,
  MetricCard,
  ProjectCTA,
} from "./shared/ProjectSharedComponents";

export default function Card13NovaMessenger() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Hero Showcase Banner */}
      <div className="mb-12">
        <div
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] bg-cover bg-center shadow-sm border border-neutral-200/40 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/phone.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f0915]/85 via-transparent to-transparent flex items-end p-6 md:p-10">
            <div>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-200 border border-pink-500/30 rounded-full text-xs font-medium tracking-wide uppercase">
                Zero-Knowledge Encrypted Messaging Suite
              </span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-2 tracking-tight">
                Nova Messenger App
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
              Absolute Privacy Architecture
            </h4>
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed">
              Nova guarantees sovereign peer-to-peer privacy through double-ratchet cryptography, self-destructing ephemeral chats, and zero metadata storage on central servers.
            </p>
            <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
              Engineered with offline mesh communication, biometric vault protection, and anti-screenshot verification designed for whistleblowers, journalists, and security-conscious teams.
            </p>
          </div>
          <div>
            <button
              onClick={() => alert("Launching Nova Encrypted Chat Simulation...")}
              className="px-6 py-3 bg-neutral-950 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Test P2P Encryption</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-3">
            Specs
          </h4>
          <ProjectMetaTable
            client="Nova Privacy Foundation Geneva"
            duration="8 Weeks"
            role="Lead Mobile Cryptography Dev"
            tags={["Swift", "WebRTC", "SQLiteCipher", "Protobuf", "Rust FFI"]}
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <MetricCard value="256-bit" label="Signal Protocol" sublabel="End-to-end encrypted" />
        <MetricCard value="0 Bytes" label="Server Logs" sublabel="Zero metadata storage" />
        <MetricCard value="500K+" label="Encrypted Calls / Day" sublabel="P2P WebRTC tunnels" />
        <MetricCard value="100%" label="Open Source" sublabel="Independently audited" />
      </div>

      {/* Screen Gallery */}
      <div className="bg-neutral-900 text-white p-8 md:p-14 rounded-3xl mb-16 relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-pink-400 mb-2 block">
            Security Features
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Key Verification, Burner Channels & Vault Lock
          </h3>
          <p className="text-neutral-400 text-sm mt-3">
            Compare cryptographic safety numbers in person or scan safety QR codes for instant verification.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar justify-start md:justify-center">
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelappthree.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/travelapp-1.png" />
          </div>
          <div className="flex-shrink-0">
            <PhoneMockup imageUrl="/images/phone.png" />
          </div>
        </div>
      </div>

      <ProjectCTA projectTitle="Nova Messenger App" />
    </div>
  );
}
