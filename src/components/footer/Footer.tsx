"use client";
import Link from "next/link";

const links = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Developers: ["Docs", "API Reference", "SDKs", "Status"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface)",
        padding: "4rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr repeat(4, 1fr)",
          gap: "3rem",
          marginBottom: "3rem",
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                <rect width="34" height="34" rx="8" fill="var(--color-accent)" />
                <circle cx="17" cy="17" r="5" fill="var(--color-oceanic-noir)" />
                <line x1="17" y1="4"  x2="17" y2="12" stroke="var(--color-oceanic-noir)" strokeWidth="2" strokeLinecap="round" />
                <line x1="17" y1="22" x2="17" y2="30" stroke="var(--color-oceanic-noir)" strokeWidth="2" strokeLinecap="round" />
                <line x1="4"  y1="17" x2="12" y2="17" stroke="var(--color-oceanic-noir)" strokeWidth="2" strokeLinecap="round" />
                <line x1="22" y1="17" x2="30" y2="17" stroke="var(--color-oceanic-noir)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span style={{
                fontFamily: "var(--font-jetbrains)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--color-text)",
              }}>
                NeuralFlow
              </span>
            </div>
            <p style={{
              fontSize: "0.85rem",
              color: "var(--color-muted)",
              lineHeight: 1.7,
              maxWidth: "220px",
            }}>
              Enterprise-grade AI automation platform. Built for teams that move fast.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {["X", "Li", "Gh", "Yt"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  aria-label={s}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-muted)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontFamily: "var(--font-jetbrains)",
                    transition: "border-color var(--ease-hover), color var(--ease-hover)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-muted)";
                  }}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--color-text)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.1rem",
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-muted)",
                        textDecoration: "none",
                        transition: "color var(--ease-hover)",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "2rem",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", opacity: 0.6 }}>
            © 2026 NeuralFlow Inc. All rights reserved.
          </p>
          <p style={{
            fontSize: "0.8rem",
            color: "var(--color-muted)",
            opacity: 0.6,
            fontFamily: "var(--font-jetbrains)",
          }}>
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
