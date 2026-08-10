import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | 30 Years of Chemical Distribution in Jodia Bazar, Karachi",
  description:
    "Learn about Al Mobeen Enterprise's 30-year history as a trusted bulk chemical distributor in Jodia Bazar, Karachi. Sourcing quality chemicals across Pakistan.",
};

const timelineEvents = [
  {
    year: "1995",
    title: "Founded in Jodia Bazar",
    description:
      "Al Mobeen Enterprise established operations at Golden Center, Weaver Lane in Karachi's premier chemical trading hub.",
  },
  {
    year: "2010",
    title: "15 Years of Sourcing Excellence",
    description:
      "Expanded distribution network to cover major industrial clusters across Sindh and Punjab.",
  },
  {
    year: "2025",
    title: "30 Years & Nationwide Reach",
    description:
      "Celebrating three decades of trusted bulk chemical distribution serving 7 major industrial sectors nationwide.",
  },
];

import PageHero from "@/components/ui/PageHero";

export default function AboutPage() {
  return (
    <div className="bg-base min-h-screen">
      <PageHero
        title="30 Years of Reliable Chemical Distribution"
        description="Operating from the heart of Jodia Bazar, Karachi since 1995 — connecting industrial manufacturers with Pakistan's most established chemical sourcing networks."
        badgeText="Heritage & Trust"
      />

      <div className="section-container py-16 md:py-20">
        {/* Narrative Section */}
        <div className="bg-surface text-ink rounded-3xl border border-border p-8 md:p-12 mb-16 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-6 text-sm md:text-base leading-relaxed text-ink">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              Our Sourcing & Distribution Commitment
            </h2>

            <p className="text-ink font-medium">
              For three decades, <strong className="text-ink font-extrabold">Al Mobeen Enterprise</strong> has served as a cornerstone chemical trading business in Jodia Bazar, Karachi. Operating as a sole proprietorship, we have built long-standing relationships with industrial clients across Pakistan based on a single core principle: <em className="text-ink font-semibold">dependable sourcing and transparent dealing</em>.
            </p>

            <p className="text-ink font-medium">
              We operate exclusively as a <strong className="text-ink font-extrabold">bulk chemical distributor and trader</strong>. Rather than importing directly or manufacturing, we leverage an extensive network of Pakistan&apos;s leading chemical importers and tier-1 dealers. This enables us to source exact specifications, grade requirements, and volume orders tailored specifically to our clients&apos; industrial needs.
            </p>

            <div className="p-6 rounded-2xl bg-base border border-border my-6">
              <h3 className="text-base font-bold text-primary mb-3">
                Business Profile Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-ink">
                <li className="text-ink"><strong className="text-ink font-bold">Location:</strong> G/9, Golden Center, Weaver Lane, Jodia Bazar, Karachi</li>
                <li className="text-ink"><strong className="text-ink font-bold">Experience:</strong> 30 Years (Established 1995)</li>
                <li className="text-ink"><strong className="text-ink font-bold">Business Model:</strong> Bulk &amp; Wholesale Distributor / Trader</li>
                <li className="text-ink"><strong className="text-ink font-bold">Service Area:</strong> Nationwide (Main Focus Karachi)</li>
                <li className="text-ink"><strong className="text-ink font-bold">Business Hours:</strong> 9:00 AM – 6:00 PM</li>
                <li className="text-ink"><strong className="text-ink font-bold">Ownership:</strong> Sole Proprietorship</li>
              </ul>
            </div>

            <p className="text-ink font-medium">
              Whether supplying solvents for paint manufacturers, plasticizers for PVC processing, or pigments for printing inks, our mission remains unchanged: delivering quality-assured chemical products on time, every time.
            </p>
          </div>
        </div>

        {/* Horizontal Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-10 text-ink">Our 30-Year Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {timelineEvents.map((evt, i) => (
              <ScrollReveal key={evt.year} delay={i * 100}>
                <div className="bg-surface p-6 rounded-2xl border border-border relative flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary text-inverse-ink mb-4">
                      {evt.year}
                    </span>
                    <h3 className="text-base font-bold mb-2 text-ink">{evt.title}</h3>
                    <p className="text-xs text-ink opacity-85 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Reliability CTA */}
        <div className="text-center bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-ink text-2xl md:text-3xl font-bold mb-4">
            Partner With a 30-Year Trusted Supplier
          </h2>
          <p className="text-ink opacity-85 max-w-md mx-auto text-sm md:text-base font-semibold mb-8">
            Need bulk industrial chemicals for your manufacturing facility? Get in touch with our Jodia Bazar team today.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">
              Contact Our Office
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
