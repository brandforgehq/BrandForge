"use client";
import { useState } from "react";
import Link from "next/link";
import BrandKitResult from "../components/BrandKitResult";

export default function AppPage() {
  const [step, setStep] = useState<"form" | "loading" | "result">("form");
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    description: "",
    audience: "",
    vibe: "",
  });
  const [brandKit, setBrandKit] = useState<any>(null);
  const [error, setError] = useState("");

  const vibes = ["Professional", "Bold & Energetic", "Minimal & Clean", "Warm & Friendly", "Luxury & Premium", "Playful & Fun"];

  async function handleGenerate() {
    if (!formData.businessName || !formData.description) {
      setError("Please fill in your business name and description.");
      return;
    }
    setError("");
    setStep("loading");
    try {
      const res = await fetch("/api/generate-brand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed");
      setBrandKit(data);
      setStep("result");
    } catch (e: any) {
      setError(e.message || "Something went wrong. Please try again.");
      setStep("form");
    }
  }

  if (step === "loading") {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 px-6">
        <div className="w-12 h-12 border-2 border-[#7D39EB] border-t-[#C6FF33] rounded-full animate-spin"/>
        <div className="text-center">
          <div className="font-black text-2xl mb-2">Forging your brand...</div>
          <div className="text-[#555] text-sm">AI is building your identity. This takes about 15 seconds.</div>
        </div>
        <div className="flex gap-2 mt-4">
          {["Analysing your business", "Picking colours", "Pairing fonts", "Building kit"].map((s, i) => (
            <div key={s} className="text-xs text-[#333] border border-[#1e1e1e] px-3 py-1 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}>{s}</div>
          ))}
        </div>
      </div>
    );
  }

  if (step === "result" && brandKit) {
    return <BrandKitResult kit={brandKit} onReset={() => { setStep("form"); setBrandKit(null); }} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <div className="border-b border-[#1e1e1e] px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#7D39EB] rounded-sm flex items-center justify-center">
            <span className="text-white font-black text-xs">BF</span>
          </div>
          <span className="font-bold text-white">BrandForge</span>
        </Link>
        <span className="text-xs text-[#555] tracking-widest uppercase">Brand Generator</span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="text-xs tracking-widest uppercase text-[#7D39EB] mb-3">Step 1 of 1</div>
          <h1 className="font-black text-4xl tracking-tighter mb-3">Tell us about<br />your business.</h1>
          <p className="text-[#555] text-sm">The more detail you give, the better your brand kit will be.</p>
        </div>

        {error && (
          <div className="border border-red-900 bg-red-950/30 text-red-400 text-sm px-4 py-3 mb-8">
            {error}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-xs tracking-widest uppercase text-[#555] mb-2">Business Name *</label>
            <input
              type="text"
              placeholder="e.g. Mama Chidi's Kitchen"
              value={formData.businessName}
              onChange={e => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#1e1e1e] text-white px-4 py-3 text-sm placeholder-[#333] focus:border-[#7D39EB] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-[#555] mb-2">Type of Business</label>
            <input
              type="text"
              placeholder="e.g. Food & Catering, Fashion, Beauty, Tech, Retail..."
              value={formData.businessType}
              onChange={e => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#1e1e1e] text-white px-4 py-3 text-sm placeholder-[#333] focus:border-[#7D39EB] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-[#555] mb-2">Describe your business *</label>
            <textarea
              rows={4}
              placeholder="e.g. I sell authentic Nigerian street food in Lekki. My customers are young professionals aged 25-40 who want quality local food quickly. We do delivery and dine-in."
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#1e1e1e] text-white px-4 py-3 text-sm placeholder-[#333] focus:border-[#7D39EB] focus:outline-none transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-[#555] mb-2">Who are your customers?</label>
            <input
              type="text"
              placeholder="e.g. Young professionals in Lagos, mothers in Abuja, students..."
              value={formData.audience}
              onChange={e => setFormData({ ...formData, audience: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#1e1e1e] text-white px-4 py-3 text-sm placeholder-[#333] focus:border-[#7D39EB] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-[#555] mb-3">Brand vibe</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {vibes.map(v => (
                <button
                  key={v}
                  onClick={() => setFormData({ ...formData, vibe: v })}
                  className={`py-2.5 px-3 text-xs border transition-colors text-left ${formData.vibe === v ? "border-[#7D39EB] bg-[#7D39EB]/10 text-white" : "border-[#1e1e1e] text-[#555] hover:border-[#333]"}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full mt-10 bg-[#C6FF33] text-black font-black text-base py-4 hover:bg-[#d4ff66] transition-colors"
        >
          Forge my brand kit →
        </button>

        <p className="text-[#333] text-xs text-center mt-4">Free for your first brand kit. No card needed.</p>
      </div>
    </div>
  );
}
