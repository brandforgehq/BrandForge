import Link from "next/link";
export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white max-w-2xl mx-auto px-6 py-24">
      <Link href="/" className="text-[#555] text-sm hover:text-white transition-colors">← Back</Link>
      <h1 className="font-black text-4xl mt-8 mb-2 tracking-tighter">Privacy Policy</h1>
      <p className="text-[#555] text-sm mb-12">Last updated: June 2025</p>
      <div className="prose prose-invert prose-sm max-w-none text-[#888] space-y-6 text-sm leading-relaxed">
        <p>BrandForge ("we", "us") is committed to protecting your privacy. This policy explains how we collect and use your data.</p>
        <h2 className="text-white font-bold text-lg mt-8">What we collect</h2>
        <p>We collect the business information you provide when generating brand kits (business name, description, audience). For paid accounts, we collect your email address and payment information (processed securely by Paystack — we never store card details).</p>
        <h2 className="text-white font-bold text-lg mt-8">How we use it</h2>
        <p>Your business information is used solely to generate your brand kit via AI. We do not sell your data to third parties.</p>
        <h2 className="text-white font-bold text-lg mt-8">Contact</h2>
        <p>Questions? Email brandforgehq.ng@gmail.com</p>
      </div>
    </div>
  );
}
