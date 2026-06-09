import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { businessName, businessType, description, audience, vibe } = await req.json();

    if (!businessName || !description) {
      return NextResponse.json({ error: "Business name and description are required." }, { status: 400 });
    }

    const prompt = `You are a world-class brand identity designer with deep expertise in the Nigerian market. 
Generate a complete brand kit for the following business.

Business Name: ${businessName}
Type: ${businessType || "Not specified"}
Description: ${description}
Target Audience: ${audience || "Not specified"}
Desired Vibe: ${vibe || "Professional"}

Return ONLY a valid JSON object with this exact structure — no markdown, no explanation, just the JSON:

{
  "businessName": "${businessName}",
  "tagline": "A punchy 6-8 word tagline that captures the brand essence",
  "brandPersonality": "2-3 sentences describing the brand's personality traits and character",
  "brandVoice": "2-3 sentences on how the brand should communicate — tone, language style, what to avoid",
  "colors": [
    {
      "name": "Color name (e.g. Deep Earth)",
      "hex": "#XXXXXX",
      "usage": "What this color is used for"
    }
  ],
  "fonts": [
    {
      "name": "Font name (real Google Font)",
      "role": "Headline / Display",
      "style": "Brief description of why this font fits",
      "googleLink": "https://fonts.google.com/specimen/Font+Name"
    },
    {
      "name": "Font name (real Google Font)",
      "role": "Body / UI",
      "style": "Brief description of why this font fits",
      "googleLink": "https://fonts.google.com/specimen/Font+Name"
    }
  ],
  "logoGuidance": "3-4 sentences describing what kind of logo mark would work best — icon style, shapes to consider, what to avoid. Do not describe a specific logo, give directional guidance.",
  "socialTemplateSuggestions": [
    "Template idea 1 — specific to this business",
    "Template idea 2",
    "Template idea 3",
    "Template idea 4"
  ],
  "brandGuidelines": "A concise brand guidelines summary covering: 1) How to use the colours together 2) Font hierarchy rules 3) Logo usage dos and don'ts 4) Overall brand feel to maintain"
}

Rules:
- Choose 4-5 colours that work beautifully together and are appropriate for the Nigerian market and the business type
- All font names must be real Google Fonts that actually exist
- Make the brand feel distinctive, not generic
- Consider Nigerian cultural context and aesthetic sensibilities
- The tagline should feel premium and specific to this business`;

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      messages: [{ role: "user", content: prompt }],
    });

    const raw = message.content[0].type === "text" ? message.content[0].text : "";
    const cleaned = raw.replace(/```json|```/g, "").trim();
    const kit = JSON.parse(cleaned);

    return NextResponse.json(kit);
  } catch (err: any) {
    console.error("Brand generation error:", err);
    return NextResponse.json({ error: "Brand generation failed. Please try again." }, { status: 500 });
  }
}
