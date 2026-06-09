import Link from "next/link";
export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white max-w-2xl mx-auto px-6 py-24">
      <Link href="/" className="text-[#555] text-sm hover:text-white transition-colors">← Back</Link>
      <h1 className="font-black text-4xl mt-8 mb-2 tracking-tighter">Terms of Service</h1>
      <p className="text-[#555] text-sm mb-12">Last updated: June 2025</p>
      <div className="text-[#888] space-y-6 text-sm leading-relaxed">
        <p>By using BrandForge, you agree to these terms. The brand kits generated are for your commercial use. We reserve the right to update these terms at any time.</p>
        <h2 className="text-white font-bold text-lg mt-8">Acceptable Use</h2>
        <p>You may use BrandForge to generate brand identities for legitimate businesses. You may not use it for illegal activities or to generate brand identities for harmful purposes.</p>
        <h2 className="text-white font-bold text-lg mt-8">Ownership</h2>
        <p>You own the brand kits you generate. BrandForge retains no rights to your generated brand identity.</p>
        <h2 className="text-white font-bold text-lg mt-8">Contact</h2>
        <p>Questions? Email brandforgehq.ng@gmail.com</p>
      </div>
    </div>
  );
}
