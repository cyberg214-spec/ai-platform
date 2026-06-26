"use client";
import { useRef, useState } from "react";
import { pricingMatrix, currencyConfig, computePrice } from "@/data/pricing";
import type { Currency, Billing } from "@/data/pricing";

const tiers = Object.entries(pricingMatrix);

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [currency, setCurrency] = useState<Currency>("USD");
  const priceRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const symbolRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  function updatePrices(b: Billing, c: Currency) {
    tiers.forEach(([key, tier]) => {
      if (priceRefs.current[key]) {
        priceRefs.current[key]!.textContent = computePrice(tier.base, c, b);
      }
      if (symbolRefs.current[key]) {
        symbolRefs.current[key]!.textContent = currencyConfig[c].symbol;
      }
    });
  }

  function handleBilling(b: Billing) {
    setBilling(b);
    updatePrices(b, currency);
  }

  function handleCurrency(c: Currency) {
    setCurrency(c);
    updatePrices(billing, c);
  }

  return (
    <section id="pricing" aria-label="Pricing" style={{ padding: "6rem 2rem", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--color-accent)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "var(--font-jetbrains)", marginBottom: "1rem" }}>
            Pricing
          </p>
          <h2 style={{ fontFamily: "var(--font-jetbrains)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--color-text)", marginBottom: "1rem" }}>
            Simple, transparent pricing
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "1rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            No hidden fees. Cancel anytime. Start free for 14 days.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>

          <div role="group" aria-label="Billing cycle" style={{ display: "flex", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "4px", gap: "4px" }}>
            {(["monthly", "annual"] as Billing[]).map((b) => (
              <button key={b} onClick={() => handleBilling(b)} style={{ padding: "0.45rem 1.1rem", borderRadius: "7px", border: "none", cursor: "pointer", fontFamily: "var(--font-jetbrains)", fontSize: "0.82rem", fontWeight: 600, background: billing === b ? "var(--color-accent)" : "transparent", color: billing === b ? "var(--color-oceanic-noir)" : "var(--color-muted)", transition: "background var(--ease-hover), color var(--ease-hover)" }}>
                {b === "monthly" ? "Monthly" : "Annual -20%"}
              </button>
            ))}
          </div>

          <div role="group" aria-label="Currency" style={{ display: "flex", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "4px", gap: "4px" }}>
            {(["INR", "USD", "EUR"] as Currency[]).map((c) => (
              <button key={c} onClick={() => handleCurrency(c)} style={{ padding: "0.45rem 1rem", borderRadius: "7px", border: "none", cursor: "pointer", fontFamily: "var(--font-jetbrains)", fontSize: "0.82rem", fontWeight: 600, background: currency === c ? "var(--color-accent)" : "transparent", color: currency === c ? "var(--color-oceanic-noir)" : "var(--color-muted)", transition: "background var(--ease-hover), color var(--ease-hover)" }}>
                {currencyConfig[c].symbol} {c}
              </button>
            ))}
          </div>

        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", alignItems: "start" }}>
          {tiers.map(([key, tier]) => {
            const isPopular = "popular" in tier && tier.popular === true;
            return (
              <article key={key} aria-label={tier.name + " plan"} style={{ border: "1px solid", borderColor: isPopular ? "var(--color-accent)" : "var(--color-border)", borderRadius: "16px", padding: "2rem", background: isPopular ? "rgba(255,200,1,0.04)" : "var(--color-bg)", position: "relative", transition: "transform var(--ease-hover), box-shadow var(--ease-hover)" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>

                {isPopular && (
                  <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", background: "var(--color-accent)", color: "var(--color-oceanic-noir)", fontSize: "0.7rem", fontWeight: 700, fontFamily: "var(--font-jetbrains)", padding: "0.25rem 1rem", borderRadius: "0 0 8px 8px", whiteSpace: "nowrap" }}>
                    MOST POPULAR
                  </div>
                )}

                <h3 style={{ fontFamily: "var(--font-jetbrains)", fontSize: "1rem", fontWeight: 700, color: isPopular ? "var(--color-accent)" : "var(--color-muted)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {tier.name}
                </h3>

                <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.6, marginBottom: "1.5rem", minHeight: "40px" }}>
                  {tier.description}
                </p>

                <div style={{ display: "flex", alignItems: "flex-end", gap: "0.25rem", marginBottom: "0.4rem" }}>
                  <span ref={(el) => { symbolRefs.current[key] = el; }} style={{ fontFamily: "var(--font-jetbrains)", fontSize: "1.4rem", fontWeight: 700, color: "var(--color-text)", lineHeight: 1.4 }}>
                    {currencyConfig[currency].symbol}
                  </span>
                  <span ref={(el) => { priceRefs.current[key] = el; }} style={{ fontFamily: "var(--font-jetbrains)", fontSize: "3rem", fontWeight: 800, color: "var(--color-text)", lineHeight: 1 }}>
                    {computePrice(tier.base, currency, billing)}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginBottom: "0.4rem" }}>/mo</span>
                </div>

                <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginBottom: "1.75rem", opacity: 0.7 }}>
                  {billing === "annual" ? "Billed annually · 20% saved" : "Billed monthly"}
                </p>

                <a href="#" style={{ display: "block", textAlign: "center", padding: "0.8rem", borderRadius: "10px", background: isPopular ? "var(--color-accent)" : "transparent", border: "1px solid", borderColor: isPopular ? "var(--color-accent)" : "var(--color-border)", color: isPopular ? "var(--color-oceanic-noir)" : "var(--color-text)", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", fontFamily: "var(--font-jetbrains)", marginBottom: "1.75rem", transition: "opacity var(--ease-hover)" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                  {key === "enterprise" ? "Contact Sales" : "Get Started Free"}
                </a>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "var(--color-muted)", fontFamily: "var(--font-inter)" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                        <circle cx="8" cy="8" r="7" stroke="var(--color-accent)" strokeWidth="1.2" />
                        <polyline points="5,8 7,10 11,6" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}