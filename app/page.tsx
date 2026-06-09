import Link from "next/link";
import Navbar from "./components/Navbar";

const steps = [
  { num: "01", title: "Describe your business", desc: "Type what you sell, who your customers are, and the vibe you want. Plain English, no design knowledge needed." },
  { num: "02", title: "AI builds your brand", desc: "BrandForge analyses your input and generates a complete brand kit — logo concept, colours, fonts, and brand voice — in under 60 seconds." },
  { num: "03", title: "Download and use", desc: "Get your social media templates, business card, WhatsApp flyer, and brand guidelines. Ready to use today." },
];

const features = [
  { icon: "⚡", title: "Brand Kit Generator", desc: "Full brand identity from a single text prompt. Logo concept, colour palette, typography — all matched to your business." },
  { icon: "📱", title: "Social Templates", desc: "10 on-brand Instagram posts, Stories, and WhatsApp flyers. Your exact colours and fonts, every time." },
  { icon: "🗃️", title: "Brand Vault", desc: "Every kit you generate is saved. Come back, re-download, or tweak anytime. Your brand, always accessible." },
  { icon: "🎨", title: "Colour Intelligence", desc: "AI picks colours that match your industry, audience, and personality — not random combinations." },
  { icon: "🔤", title: "Font Pairing", desc: "Professional font combinations that match your brand feel. Linked directly to Google Fonts — free to use." },
  { icon: "📄", title: "Brand Guidelines", desc: "A one-page brand guide explaining how to use your colours, fonts, and logo consistently across everything." },
];

const pricing = [
  {
    name: "Starter",
    price: "Free",
    sub: "No card required",
    color: "border-[#1e1e1e]",
    items: ["1 brand kit", "3 social templates", "PNG downloads", "BrandForge watermark"],
    cta: "Get started free",
    href: "/app",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₦9,500",
    sub: "/month · cancel anytime",
    color: "border-[#7D39EB]",
    items: ["Unlimited brand kits", "30 templates/month", "No watermark", "Brand vault", "WhatsApp flyers", "Business card export"],
    cta: "Start Pro →",
    href: "/app?plan=pro",
    highlight: true,
  },
  {
    name: "Business",
    price: "₦22,000",
    sub: "/month · for teams",
    color: "border-[#1e1e1e]",
    items: ["Everything in Pro", "5 team members", "100 templates/month", "ZIP export", "Priority support"],
    cta: "Start Business →",
    href: "/app?plan=business",
    highlight: false,
  },
];

const faqs = [
  { q: "Do I need design experience?", a: "Zero. You just describe your business in plain English. BrandForge does the rest." },
  { q: "Can I use the brand commercially?", a: "Yes. Everything you generate is yours to use on your business, social media, print, and more." },
  { q: "How is this different from Canva?", a: "Canva gives you blank templates. BrandForge creates a unique brand identity specifically for your business — then auto-fills every template with your brand." },
  { q: "What payment methods are accepted?", a: "We use Paystack — Nigerian bank cards, bank transfer, and USSD all work. No dollar conversion needed." },
  { q: "Can I regenerate my brand kit?", a: "Yes. Pro and Business users can regenerate unlimited times until the brand feels exactly right." },
];

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-[#1e1e1e] px-4 py-2 text-xs text-[#555] mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF33] animate-pulse"/>
          Built for Nigerian small businesses
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[88px] font-black leading-[0.92] tracking-tighter mb-8 max-w-4xl">
          Look like<br />
          <span className="text-[#7D39EB]">₦1 Million.</span><br />
          In 60 seconds.
        </h1>

        <p className="text-[#555] text-lg md:text-xl max-w-xl leading-relaxed mb-12">
          Describe your business. BrandForge generates your full brand kit — logo, colours, fonts, social templates — instantly. No designer needed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/app" className="bg-[#C6FF33] text-black font-bold text-base px-8 py-4 hover:bg-[#d4ff66] transition-colors inline-flex items-center gap-2">
            Generate your brand kit free →
          </Link>
          <Link href="#how" className="border border-[#1e1e1e] text-[#555] hover:text-white hover:border-[#333] font-medium text-base px-8 py-4 transition-colors inline-flex items-center gap-2">
            See how it works
          </Link>
        </div>

        <div className="flex flex-wrap gap-8 mt-16 pt-16 border-t border-[#1e1e1e]">
          {[["60s", "Average generation time"], ["₦0", "To start"], ["100%", "Yours to keep"], ["2M+", "Nigerian SMBs who need this"]].map(([num, label]) => (
            <div key={label}>
              <div className="font-black text-3xl text-white">{num}</div>
              <div className="text-[#555] text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase text-[#555] mb-4">How it works</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16">Three steps.<br />Full brand.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {steps.map((s) => (
              <div key={s.num} className="bg-black p-10">
                <div className="font-black text-5xl text-[#1e1e1e] mb-6">{s.num}</div>
                <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase text-[#555] mb-4">What you get</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16">Everything your brand needs.</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {features.map((f) => (
              <div key={f.title} className="bg-black p-8 hover:bg-[#0a0a0a] transition-colors">
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="font-bold text-base mb-2">{f.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 px-6 border-t border-[#1e1e1e] bg-[#7D39EB]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase text-[#7D39EB] mb-4">Early users</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16">Lagos businesses<br />are already forging.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {[
              { quote: "I spent 3 months trying to get a logo that looks professional. BrandForge did it in one minute. One minute.", name: "Chioma A.", biz: "Chioma's Catering, Lekki" },
              { quote: "My boutique finally looks like the brand I always imagined. Customers actually comment on the branding now.", name: "Tunde B.", biz: "TB Clothing, Ikeja" },
              { quote: "The WhatsApp flyer template alone is worth it. I used to spend hours on Canva every week.", name: "Ngozi O.", biz: "Ngozi Beauty, Abuja" },
            ].map((t) => (
              <div key={t.name} className="bg-black p-8">
                <p className="text-[#888] text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-[#555] text-xs mt-1">{t.biz}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-widest uppercase text-[#555] mb-4">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Priced for Nigeria.</h2>
          <p className="text-[#555] mb-16">Pay in Naira. No dollar conversion. No surprises.</p>
          <div className="grid md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {pricing.map((p) => (
              <div key={p.name} className={`bg-black p-8 ${p.highlight ? "ring-1 ring-[#7D39EB]" : ""} relative`}>
                {p.highlight && (
                  <div className="absolute -top-px left-0 right-0 h-px bg-[#7D39EB]"/>
                )}
                {p.highlight && (
                  <div className="absolute -top-3 left-8 bg-[#7D39EB] text-white text-xs px-3 py-0.5 font-bold">Most popular</div>
                )}
                <div className="text-xs tracking-widest uppercase text-[#555] mb-4">{p.name}</div>
                <div className="font-black text-4xl mb-1">{p.price}</div>
                <div className="text-[#555] text-xs mb-8">{p.sub}</div>
                <ul className="space-y-3 mb-10">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="text-[#C6FF33] mt-0.5">→</span>
                      <span className="text-[#888]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className={`block text-center py-3 font-bold text-sm transition-colors ${p.highlight ? "bg-[#C6FF33] text-black hover:bg-[#d4ff66]" : "border border-[#333] text-white hover:border-white"}`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs tracking-widest uppercase text-[#555] mb-4">Questions</div>
          <h2 className="text-4xl font-black tracking-tighter mb-16">Common questions.</h2>
          <div className="divide-y divide-[#1e1e1e]">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <div className="font-bold mb-2">{f.q}</div>
                <div className="text-[#555] text-sm leading-relaxed">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 border-t border-[#1e1e1e] bg-[#7D39EB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            Your brand is<br />waiting.
          </h2>
          <p className="text-white/60 mb-12 text-lg">Join thousands of Nigerian businesses who look the part.</p>
          <Link href="/app" className="bg-[#C6FF33] text-black font-black text-lg px-10 py-5 hover:bg-[#d4ff66] transition-colors inline-block">
            Generate your brand kit free →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="font-black text-lg mb-2">BrandForge</div>
            <div className="text-[#555] text-sm">AI brand kits for Nigerian businesses.</div>
            <div className="text-[#333] text-xs mt-4">brandforgehq.ng@gmail.com</div>
          </div>
          <div className="flex gap-12 text-sm text-[#555]">
            <div className="flex flex-col gap-2">
              <Link href="/app" className="hover:text-white transition-colors">Generator</Link>
              <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="#how" className="hover:text-white transition-colors">How it works</Link>
            </div>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com/hqbrandforge" target="_blank" className="hover:text-white transition-colors">Instagram</a>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#1e1e1e] text-[#333] text-xs">
          © 2025 BrandForge. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
