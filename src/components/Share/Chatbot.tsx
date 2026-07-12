"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Dotted Globe / Circle Logo (pulses and rotates slowly for micro-animation)
const DottedGlobe = ({ className = "", size = 20 }: { className?: string; size?: number }) => {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={`animate-spin text-white ${className}`} style={{ animationDuration: "20s" }}>
      {/* Center dot */}
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />

      {/* Inner ring (r=4.5) */}
      <circle cx="16.5" cy="12" r="1" fill="currentColor" />
      <circle cx="14.25" cy="15.9" r="1" fill="currentColor" />
      <circle cx="9.75" cy="15.9" r="1" fill="currentColor" />
      <circle cx="7.5" cy="12" r="1" fill="currentColor" />
      <circle cx="9.75" cy="8.1" r="1" fill="currentColor" />
      <circle cx="14.25" cy="8.1" r="1" fill="currentColor" />

      {/* Outer ring (r=8.5) */}
      <circle cx="20.5" cy="12" r="0.8" fill="currentColor" />
      <circle cx="19.36" cy="16.25" r="0.8" fill="currentColor" />
      <circle cx="16.25" cy="19.36" r="0.8" fill="currentColor" />
      <circle cx="12" cy="20.5" r="0.8" fill="currentColor" />
      <circle cx="7.75" cy="19.36" r="0.8" fill="currentColor" />
      <circle cx="4.64" cy="16.25" r="0.8" fill="currentColor" />
      <circle cx="3.5" cy="12" r="0.8" fill="currentColor" />
      <circle cx="4.64" cy="7.75" r="0.8" fill="currentColor" />
      <circle cx="7.75" cy="4.64" r="0.8" fill="currentColor" />
      <circle cx="12" cy="3.5" r="0.8" fill="currentColor" />
      <circle cx="16.25" cy="4.64" r="0.8" fill="currentColor" />
      <circle cx="19.36" cy="7.75" r="0.8" fill="currentColor" />
    </svg>
  );
};

// Dotted close icon matching the design style
const DottedX = ({ size = 16 }: { size?: number }) => {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="text-white">
      {/* Diagonal 1 */}
      <circle cx="6" cy="6" r="1.1" fill="currentColor" />
      <circle cx="8" cy="8" r="1.1" fill="currentColor" />
      <circle cx="10" cy="10" r="1.1" fill="currentColor" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" />
      <circle cx="14" cy="14" r="1.1" fill="currentColor" />
      <circle cx="16" cy="16" r="1.1" fill="currentColor" />
      <circle cx="18" cy="18" r="1.1" fill="currentColor" />

      {/* Diagonal 2 */}
      <circle cx="18" cy="6" r="1.1" fill="currentColor" />
      <circle cx="16" cy="8" r="1.1" fill="currentColor" />
      <circle cx="14" cy="10" r="1.1" fill="currentColor" />
      {/* (12, 12) is intersection */}
      <circle cx="10" cy="14" r="1.1" fill="currentColor" />
      <circle cx="8" cy="16" r="1.1" fill="currentColor" />
      <circle cx="6" cy="18" r="1.1" fill="currentColor" />
    </svg>
  );
};

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "contact">("chat");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Form states for contact tab
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Handle quick option clicks
  const handleQuickOption = (option: string) => {
    if (isTyping) return;

    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: option,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    // Simulate typing indicator
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      switch (option) {
        case "Where should I start?":
          botResponse = "I recommend checking out our latest projects! Or, if you're looking for high-quality boards, let me know and I'll direct you.";
          break;
        case "What do you do?":
          botResponse = "I'm Jemi, the AI assistant here to answer questions about Greenboard, showcase our architectural designs, or help you contact our team.";
          break;
        case "I have a project":
          botResponse = "That's exciting! You can use the Contact tab above to send your project requirements directly to our team, and we will get back to you shortly.";
          break;
        default:
          botResponse = "That sounds interesting! Let me know if you would like me to help connect you with our team.";
      }

      const botMsg: Message = {
        id: Math.random().toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  // Handle custom text inputs
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userText = inputValue;
    setInputValue("");

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let botResponse = "I'm here to help you design, build, and deploy premium web applications. Would you like to check out our contact form or hear about our services?";

      if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        botResponse = "Hello! Great to meet you. How can I help you today?";
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("rate")) {
        botResponse = "Our pricing is tailored to the specific details of each architectural project. You can leave your details in the Contact tab, and our team will provide a quote!";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) {
        botResponse = "To get in touch, click on the 'Contact' tab at the top of this card and fill out the form. We will reach back to you in less than 24 hours!";
      } else if (lower.includes("juice") || lower.includes("board") || lower.includes("greenboard")) {
        botResponse = "Greenboard specializes in high-quality architectural boards. We focus on premium sustainable design and engineering.";
      }

      const botMsg: Message = {
        id: Math.random().toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  // Handle Contact Form Submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    // Simulate sending message
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setFormSubmitted(true);
      setContactForm({ name: "", email: "", message: "" });
      setTimeout(() => {
        setFormSubmitted(false);
        setActiveTab("chat");
      }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* 1. Closed state: Floating Capsule Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#0d0d0d] hover:bg-[#151515] border border-white/10 text-white rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.4)] cursor-pointer transition-all duration-500 ease-out origin-bottom-left hover:scale-[1.04] active:scale-[0.98] ${
          isOpen ? "opacity-0 scale-90 pointer-events-none translate-y-4" : "opacity-100 scale-100 translate-y-0"
        }`}
      >
        <div className="bg-white/10 rounded-full p-1.5 flex items-center justify-center border border-white/5">
          <DottedGlobe size={18} />
        </div>
        <span className="font-manrope text-[14px] font-semibold tracking-wide text-neutral-200">Let's work together</span>
      </button>

      {/* 2. Expanded state: AI Chatbot Card */}
      <div
        style={{ overscrollBehavior: "contain" }}
        className={`fixed bottom-6 left-6 z-50 w-[380px] h-[640px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-6rem)] bg-[#0d0d0d] border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden font-manrope transition-all duration-500 ease-out origin-bottom-left ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8 pointer-events-none"
        }`}
      >
        {/* Jemi Background Photo (only displayed on Chat tab for styling matching image) */}
        {activeTab === "chat" && (
          <div className="absolute inset-0 w-full h-[65%] pointer-events-none select-none z-0">
            <Image src="/images/jemi.png" alt="Jemi AI Assistant" fill priority className="object-cover object-top opacity-85" />
            {/* Visual overlays to match premium dark design */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-[#0d0d0d] w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
          </div>
        )}

        {/* Card Header (Floating above the content) */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-6 pb-2">
          {/* Navigation Tabs */}
          <div className="flex gap-4">
            <button onClick={() => setActiveTab("chat")} className={`text-sm font-semibold tracking-wide transition-all ${activeTab === "chat" ? "text-white opacity-100 scale-105" : "text-neutral-400 opacity-60 hover:opacity-80"}`}>
              Chat
            </button>
            <button onClick={() => setActiveTab("contact")} className={`text-sm font-semibold tracking-wide transition-all ${activeTab === "contact" ? "text-white opacity-100 scale-105" : "text-neutral-400 opacity-60 hover:opacity-80"}`}>
              Contact
            </button>
          </div>

          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="flex items-center gap-1.5 text-neutral-300 opacity-70 hover:opacity-100 transition-opacity cursor-pointer group">
            <div className="group-hover:rotate-90 transition-transform duration-300">
              <DottedX size={12} />
            </div>
            <span className="text-xs font-medium tracking-wide">Close</span>
          </button>
        </div>

        {/* Card Body - Content Scroll Area */}
        <div className="relative z-10 flex-1 flex flex-col min-h-0 overflow-hidden">
          {activeTab === "chat" ? (
            <>
              {/* Scrollable messages area - always rendered for proper flex sizing */}
              <div
                className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar"
                style={{ overscrollBehavior: "contain" }}
              >
                {messages.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    {/* Small inline Jemi name badge */}
                    <div className="text-[11px] font-semibold tracking-wider text-white/40 uppercase mb-1">Conversation with Jemi</div>
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "self-end items-end" : "self-start items-start"}`}>
                        <div className={`px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed shadow-sm ${msg.sender === "user" ? "bg-white/10 text-white border border-white/5 rounded-tr-sm" : "bg-white text-black rounded-tl-sm font-medium"}`}>{msg.text}</div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="self-start flex flex-col items-start gap-1">
                        <div className="bg-white text-black px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-black/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                          <span className="w-1.5 h-1.5 bg-black/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                          <span className="w-1.5 h-1.5 bg-black/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                ) : (
                  /* Jemi Default Greetings & Suggestions (if conversation is fresh) */
                  <div className="flex flex-col items-start w-full h-full justify-end">
                    {/* Name */}
                    <span className="text-[14px] font-semibold text-neutral-400 tracking-wide mb-1">Jemi</span>
                    {/* Large Prompt Text */}
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.3] text-white tracking-wide mb-6">Hey — I'm Jemi, Off Menu's AI assistant. Anything catch your eye?</h3>

                    {/* Suggestion Chips */}
                    <div className="flex flex-wrap gap-2 mb-2 w-full z-10">
                      <button type="button" onClick={() => handleQuickOption("Where should I start?")} className="bg-white text-black font-semibold text-[13px] tracking-wide px-4 py-2.5 rounded-full hover:bg-neutral-200 transition-all cursor-pointer shadow-md">
                        Where should I start?
                      </button>
                      <button type="button" onClick={() => handleQuickOption("What do you do?")} className="bg-white/10 hover:bg-white/15 text-white border border-white/5 font-semibold text-[13px] tracking-wide px-4 py-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer">
                        What do you do?
                      </button>
                      <button type="button" onClick={() => handleQuickOption("I have a project")} className="bg-white/10 hover:bg-white/15 text-white border border-white/5 font-semibold text-[13px] tracking-wide px-4 py-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer">
                        I have a project
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Contact Panel */
            <div className="flex-1 flex flex-col justify-center w-full relative z-10 pt-4 px-6">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center gap-4 py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white mb-2 shadow-lg">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent!</h4>
                  <p className="text-neutral-400 text-sm max-w-[240px]">Thanks for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-4 w-full justify-center">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[18px] font-bold text-white tracking-wide">Let's collaborate</h3>
                    <p className="text-xs text-neutral-400">Drop us your details and we'll reply shortly.</p>
                  </div>

                  <div className="flex flex-col gap-3 mt-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-[13px] focus:outline-none focus:border-white/30 hover:border-white/20 transition-all font-medium"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-[13px] focus:outline-none focus:border-white/30 hover:border-white/20 transition-all font-medium"
                    />
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-[13px] focus:outline-none focus:border-white/30 hover:border-white/20 transition-all font-medium resize-none"
                    />
                  </div>

                  <button type="submit" className="w-full bg-white text-black hover:bg-neutral-200 transition-colors font-bold text-xs tracking-wider uppercase py-3.5 rounded-xl cursor-pointer shadow-md mt-2 flex items-center justify-center gap-2">
                    <span>Submit Request</span>
                    {isTyping && <span className="w-2 h-2 bg-black rounded-full animate-ping"></span>}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Card Footer (Input Field Area for Chat tab) */}
        {activeTab === "chat" && (
          <form onSubmit={handleSendMessage} className="relative z-10 px-6 pb-6 pt-2 w-full">
            <div className="flex items-center gap-3 bg-white/10 border border-white/5 rounded-full px-4 py-3.5 backdrop-blur-xl shadow-inner focus-within:border-white/20 transition-colors">
              <DottedGlobe size={18} className="opacity-70 text-neutral-300" />
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} disabled={isTyping} placeholder="Ask me anything..." className="flex-1 bg-transparent text-white placeholder-neutral-400 focus:outline-none text-[13px] font-medium leading-none disabled:opacity-50" />
              {inputValue.trim() && (
                <button type="submit" className="bg-white text-black rounded-full p-1 cursor-pointer hover:scale-105 active:scale-95 transition-all">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </>
  );
}
