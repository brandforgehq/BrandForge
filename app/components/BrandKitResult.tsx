"use client";

interface Color { name: string; hex: string; usage: string; }
interface Font { name: string; role: string; style: string; googleLink: string; }
interface BrandKit {
  businessName: string;
  tagline: string;
  brandPersonality: string;
  brandVoice: string;
  colors: Color[];
  fonts: Font[];
  logoGuidance: string;
  socialTemplateSuggestions: string[];
  brandGuidelines: string;
}

export default function BrandKitResult({ kit, onReset }: { kit: BrandKit; onReset: () => void }) {
  function copyHex(hex: string) {
    navigator.clipboard.writeText(hex);
  }

  function getContrastColor(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return lum > 0.5 ? "#000000" : "#ffffff";
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <div className="border-b border-[#1e1e1e] px-6 h-16 flex items-center justify-between sticky top-0 bg-black/90 backdrop-blur z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#7D39EB] rounded-sm flex items-center justify-center">
            <span className="text-white font-black text-xs">BF</span>
          </div>
          <span className="font-bold text-white">BrandForge</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onReset} className="text-xs text-[#555] hover:text-white transition-colors">
            ← Generate another
          </button>
          <button className="bg-[#C6FF33] text-black text-xs font-bold px-4 py-2 hover:bg-[#d4ff66] transition-colors">
            Upgrade to save ↑
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs tracking-widest uppercase text-[#C6FF33] mb-3">Your brand kit is ready ✦</div>
          <h1 className="font-black text-5xl tracking-tighter mb-2">{kit.businessName}</h1>
          <p className="text-[#7D39EB] text-xl font-medium italic">"{kit.tagline}"</p>
        </div>

        {/* Brand personality */}
        <div className="grid md:grid-cols-2 gap-px bg-[#1e1e1e] mb-px">
          <div className="bg-[#0a0a0a] p-6">
            <div className="text-xs tracking-widest uppercase text-[#555] mb-3">Brand Personality</div>
            <p className="text-sm text-[#888] leading-relaxed">{kit.brandPersonality}</p>
          </div>
          <div className="bg-[#0a0a0a] p-6">
            <div className="text-xs tracking-widest uppercase text-[#555] mb-3">Brand Voice</div>
            <p className="text-sm text-[#888] leading-relaxed">{kit.brandVoice}</p>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mt-8 mb-8">
          <div className="text-xs tracking-widest uppercase text-[#555] mb-4">Colour Palette</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {kit.colors?.map((color: Color) => (
              <button
                key={color.hex}
                onClick={() => copyHex(color.hex)}
                className="group relative overflow-hidden"
                title={`Click to copy ${color.hex}`}
              >
                <div
                  className="aspect-square w-full"
                  style={{ background: color.hex }}
                />
                <div className="p-2 bg-[#0a0a0a] border border-[#1e1e1e]">
                  <div className="font-bold text-xs">{color.name}</div>
                  <div className="text-[#555] text-xs font-mono">{color.hex}</div>
                  <div className="text-[#333] text-xs mt-1 leading-tight">{color.usage}</div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Copy</span>
                </div>
              </button>
            ))}
          </div>
          <p className="text-[#333] text-xs mt-2">Click any colour to copy the hex code.</p>
        </div>

        {/* Color Preview Bar */}
        {kit.colors?.length > 0 && (
          <div className="h-16 flex mb-8 overflow-hidden">
            {kit.colors.map((c: Color) => (
              <div key={c.hex} className="flex-1" style={{ background: c.hex }} />
            ))}
          </div>
        )}

        {/* Typography */}
        <div className="mb-8">
          <div className="text-xs tracking-widest uppercase text-[#555] mb-4">Typography</div>
          <div className="grid md:grid-cols-2 gap-px bg-[#1e1e1e]">
            {kit.fonts?.map((font: Font) => (
              <div key={font.name} className="bg-[#0a0a0a] p-6">
                <div className="text-xs tracking-widest uppercase text-[#555] mb-1">{font.role}</div>
                <div className="font-black text-3xl mb-2" style={{ fontFamily: `'${font.name}', sans-serif` }}>
                  {font.name}
                </div>
                <div className="text-[#555] text-xs mb-4">{font.style}</div>
                <a
                  href={font.googleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#7D39EB] hover:text-[#9b5ff5] transition-colors"
                >
                  View on Google Fonts →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Guidance */}
        <div className="mb-8 bg-[#0a0a0a] border border-[#1e1e1e] p-6">
          <div className="text-xs tracking-widest uppercase text-[#555] mb-3">Logo Direction</div>
          <p className="text-sm text-[#888] leading-relaxed">{kit.logoGuidance}</p>
        </div>

        {/* Social Template Ideas */}
        <div className="mb-8">
          <div className="text-xs tracking-widest uppercase text-[#555] mb-4">Social Template Ideas</div>
          <div className="grid sm:grid-cols-2 gap-2">
            {kit.socialTemplateSuggestions?.map((s: string, i: number) => (
              <div key={i} className="bg-[#0a0a0a] border border-[#1e1e1e] p-4 flex gap-3">
                <span className="text-[#C6FF33] font-black text-sm mt-0.5">0{i + 1}</span>
                <span className="text-sm text-[#888]">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Guidelines */}
        <div className="mb-12 bg-[#7D39EB]/5 border border-[#7D39EB]/20 p-6">
          <div className="text-xs tracking-widest uppercase text-[#7D39EB] mb-3">Brand Guidelines</div>
          <p className="text-sm text-[#888] leading-relaxed whitespace-pre-line">{kit.brandGuidelines}</p>
        </div>

        {/* Upgrade CTA */}
        <div className="bg-[#7D39EB] p-8 text-center">
          <h3 className="font-black text-2xl mb-2">Save your brand kit.</h3>
          <p className="text-white/70 text-sm mb-6">Upgrade to Pro to save this kit, download social templates, and generate unlimited brands.</p>
          <button className="bg-[#C6FF33] text-black font-black px-8 py-3 hover:bg-[#d4ff66] transition-colors">
            Upgrade to Pro — ₦9,500/month →
          </button>
          <div className="mt-3 text-white/40 text-xs">Cancel anytime. No dollar conversion.</div>
        </div>
      </div>
    </div>
  );
}
