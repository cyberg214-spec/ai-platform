"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="cta"
      aria-label="Call to action"
      style={{
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div aria-hidden="true" style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "400px",
        background: "radial-gradient(ellipse, rgba(255,200,1,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}>
        <p style={{
          fontSize: "0.75rem",
          color: "var(--color-accent)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontFamily: "var(--font-jetbrains)",
          marginBottom: "1rem",
        }}>
          Get Started Today
        </p>

        <h2 style={{
          fontFamily: "var(--font-jetbrains)",
          fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
          fontWeight: 800,
          color: "var(--color-text)",
          lineHeight: 1.15,
          marginBottom: "1.5rem",
        }}>
          Ready to automate your
          {" "}
          <span style={{
            background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            entire workflow?
          </span>
        </h2>

        <p style={{
          fontSize: "1.05rem",
          color: "var(--color-muted)",
          lineHeight: 1.7,
          marginBottom: "2.5rem",
          maxWidth: "520px",
          margin: "0 auto 2.5rem",
        }}>
          Join 500+ enterprise teams already using NeuralFlow to eliminate
          manual ops and scale intelligently.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="#pricing"
            style={{
              padding: "0.9rem 2.4rem",
              borderRadius: "10px",
              background: "var(--color-accent)",
              color: "var(--color-oceanic-noir)",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              fontFamily: "var(--font-jetbrains)",
              transition: "opacity var(--ease-hover), transform var(--ease-hover)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.88";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Start Free Trial
          </Link>

          <Link
            href="#"
            style={{
              padding: "0.9rem 2.4rem",
              borderRadius: "10px",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              background: "transparent",
              fontFamily: "var(--font-inter)",
              transition: "border-color var(--ease-hover), transform var(--ease-hover)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Talk to Sales
          </Link>
        </div>

        <p style={{
          fontSize: "0.8rem",
          color: "var(--color-muted)",
          marginTop: "1.5rem",
          opacity: 0.6,
        }}>
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>
    </section>
  );
}
