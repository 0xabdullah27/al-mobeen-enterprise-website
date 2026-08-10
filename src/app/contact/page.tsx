"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useQuote } from "@/components/QuoteProvider";
import { useLanguage } from "@/components/LanguageProvider";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const { items, clearAll } = useQuote();
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProductsText, setSelectedProductsText] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Pre-fill products from URL query or Quote List context
  useEffect(() => {
    const urlProducts = searchParams.get("products");
    if (urlProducts) {
      const productList = urlProducts
        .split(",")
        .map((p) => p.replace(/-/g, " "))
        .join(", ");
      setSelectedProductsText(productList);
    } else if (items.length > 0) {
      const productList = items
        .map((item) => `${item.displayName}${item.quantity ? ` (${item.quantity})` : ""}`)
        .join(", ");
      setSelectedProductsText(productList);
    }
  }, [searchParams, items]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMessage("Please enter your Name and Phone Number.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          phone,
          email,
          products: selectedProductsText,
          quantity,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        clearAll();
      } else {
        setErrorMessage(data.error || "Failed to submit quote request.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again or contact us via WhatsApp.");
      setStatus("error");
    }
  };

  return (
    <div className="bg-[var(--color-surface)] text-[var(--color-ink)] rounded-3xl border border-[var(--color-border)] p-6 md:p-10 shadow-sm">
      <h2 style={{ color: "#0d1b2a" }} className="text-xl md:text-2xl font-bold mb-2">Request a Bulk Quote</h2>
      <p style={{ color: "#1b263b" }} className="text-xs md:text-sm font-semibold mb-6">
        Fill out your requirements below and our sales desk at Jodia Bazar will contact you within 24 hours.
      </p>

      {status === "success" ? (
        <div className="py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Quote Request Sent!</h3>
          <p className="text-sm text-[var(--color-neutral)] max-w-md mx-auto mb-8">
            Thank you! Your quote request has been received. Our team will review your specifications and contact you at <span className="font-semibold text-[var(--color-ink)]">{phone}</span> shortly.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setName("");
              setCompany("");
              setPhone("");
              setEmail("");
              setSelectedProductsText("");
              setQuantity("");
              setMessage("");
            }}
            className="btn-outline !text-xs"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 text-red-600 text-xs font-medium border border-red-200">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
                {t("contact.form.name")} <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
                {t("contact.form.company")}
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company / Factory Name"
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
                {t("contact.form.phone")} <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0300-1234567"
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
              {t("contact.form.products")}
            </label>
            <input
              type="text"
              value={selectedProductsText}
              onChange={(e) => setSelectedProductsText(e.target.value)}
              placeholder="e.g. DOP, Titanium Dioxide, Xylene, Ethyl Alcohol..."
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
              {t("contact.form.quantity")}
            </label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g. 5 Drums, 20 Tons, Monthly requirement..."
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--color-ink)] mb-1">
              {t("contact.form.message")}
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Provide any specific specifications, target delivery dates, or inquiry notes..."
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full justify-center !py-3.5"
          >
            {status === "submitting" ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                Submitting Request...
              </span>
            ) : (
              t("contact.form.submit")
            )}
          </button>
        </form>
      )}
    </div>
  );
}

import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-base)] min-h-screen">
      <PageHero
        title="Contact Al Mobeen Enterprise"
        description="Reach out directly to our sales office at Jodia Bazar, Karachi for bulk chemical inquiries, quotes, and product availability."
        badgeText="Get In Touch"
      />

      <div className="section-container py-16 md:py-20">
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 bg-surface rounded-3xl border text-center">Loading Form...</div>}>
              <ContactFormContent />
            </Suspense>
          </div>

          {/* Contact Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Box */}
            <div className="bg-surface rounded-3xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-[var(--color-primary)]">
                Jodia Bazar Main Office
              </h3>

              <div className="space-y-4 text-xs md:text-sm text-[var(--color-ink)]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs text-[var(--color-neutral)] uppercase tracking-wider mb-0.5">Address</strong>
                    <span>G/9, Golden Center, Weaver Lane, Jodia Bazar, Karachi, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs text-[var(--color-neutral)] uppercase tracking-wider mb-0.5">Phone & WhatsApp</strong>
                    <div className="flex flex-col gap-1 font-medium">
                      <a href="tel:+923321134530" className="hover:text-[var(--color-accent)] transition-colors">0332-1134530 (Primary)</a>
                      <a href="tel:+923002268847" className="hover:text-[var(--color-accent)] transition-colors">0300-2268847</a>
                      <a href="tel:+923152703824" className="hover:text-[var(--color-accent)] transition-colors">0315-2703824</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs text-[var(--color-neutral)] uppercase tracking-wider mb-0.5">Email</strong>
                    <a href="mailto:almobeenenterprise@gmail.com" className="hover:text-[var(--color-accent)] transition-colors font-medium">
                      almobeenenterprise@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-xs text-[var(--color-neutral)] uppercase tracking-wider mb-0.5">Business Hours</strong>
                    <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-surface rounded-3xl border border-[var(--color-border)] p-2 shadow-sm overflow-hidden h-64">
              <iframe
                title="Al Mobeen Enterprise Jodia Bazar Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3542289635956!2d67.000673!3d24.851778!2m3!1f00!2f00!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e08f51a2eb3%3A0x86f8749a04a3eb3!2sJodia%20Bazar%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.25rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
