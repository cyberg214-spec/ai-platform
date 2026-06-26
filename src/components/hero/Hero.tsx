"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow top */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(255,200,1,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Background glow bottom left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,153,50,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* BADGE */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.35rem 1rem",
          borderRadius: "999px",
          border: "1px solid var(--color-border)",
          background: "rgba(255,200,1,0.06)",
          marginBottom: "2rem",
          animation: "fadeUp 0.4s ease-out both",
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "var(--color-accent)",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontSize: "0.8rem",
            color: "var(--color-muted)",
            fontFamily: "var(--font-jetbrains)",
            fontWeight: 500,
          }}
        >
          Now in Public Beta — v2.4 Released
        </span>
      </div>

      {/* HEADING */}
      <h1
        style={{
          fontFamily: "var(--font-jetbrains)",
          fontSize: "clamp(2.2rem, 6vw, 4.8rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          maxWidth: "860px",
          marginBottom: "1.5rem",
          animation: "fadeUp 0.4s 0.08s ease-out both",
          color: "var(--color-text)",
        }}
      >
        Automate Everything.{" "}
        <span
          style={{
            background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-2))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Scale Intelligently.
        </span>
      </h1>

      {/* SUBHEADING */}
      <p
        style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "var(--color-muted)",
          maxWidth: "580px",
          lineHeight: 1.8,
          marginBottom: "2.5rem",
          fontFamily: "var(--font-inter)",
          animation: "fadeUp 0.4s 0.16s ease-out both",
        }}
      >
        NeuralFlow connects your data pipelines, eliminates manual ops, and deploys
        AI agents that act — not just respond.
      </p>

      {/* CTA BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "4rem",
          animation: "fadeUp 0.4s 0.24s ease-out both",
        }}
      >
        <Link
          href="#pricing"
          style={{
            padding: "0.85rem 2.2rem",
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
          href="#features"
          style={{
            padding: "0.85rem 2.2rem",
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
          Watch Demo →
        </Link>
      </div>

      {/* STATS ROW */}
      <div
        style={{
          display: "flex",
          gap: "4rem",
          flexWrap: "wrap",
          justifyContent: "center",
          animation: "fadeUp 0.4s 0.32s ease-out both",
        }}
      >
        {[
          { value: "10M+", label: "Tasks Automated" },
          { value: "99.9%", label: "Uptime SLA" },
          { value: "3.2x",  label: "Avg ROI" },
          { value: "500ms", label: "Avg Response Time" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "2rem",
                fontWeight: 800,
                color: "var(--color-accent)",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--color-muted)",
                marginTop: "0.3rem",
                fontFamily: "var(--font-inter)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* SCROLL INDICATOR */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          animation: "bounce 2s infinite",
        }}
      >
        <span style={{ fontSize: "0.7rem", color: "var(--color-muted)", letterSpacing: "0.1em" }}>
          SCROLL
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
