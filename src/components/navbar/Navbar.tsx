"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Features", "Pricing", "Docs", "Blog"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "64px",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(13,31,39,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        transition: "background var(--ease-layout), border-color var(--ease-layout)",
      }}
    >

      {/* LOGO */}
      <Link
        href="/"
        aria-label="NeuralFlow Home"
        style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}
      >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
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
          fontSize: "1.1rem",
          color: "var(--color-text)",
          letterSpacing: "-0.03em",
        }}>
          NeuralFlow
        </span>
      </Link>

      {/* DESKTOP NAV */}
      <nav
        aria-label="Primary navigation"
        style={{ display: "flex", alignItems: "center", gap: "2rem" }}
        className="desktop-nav"
      >
        {navLinks.map((item) => (
          <Link
            key={item}
            href={"#" + item.toLowerCase()}
            style={{
              color: "var(--color-muted)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "color var(--ease-hover)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
          >
            {item}
          </Link>
        ))}

        <Link
          href="#pricing"
          style={{
            padding: "0.45rem 1.2rem",
            borderRadius: "8px",
            background: "var(--color-accent)",
            color: "var(--color-oceanic-noir)",
            fontWeight: 700,
            fontSize: "0.875rem",
            textDecoration: "none",
            fontFamily: "var(--font-jetbrains)",
            transition: "opacity var(--ease-hover), transform var(--ease-hover)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.85";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Get Started
        </Link>
      </nav>

      {/* MOBILE HAMBURGER */}
      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.4rem",
          display: "none",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        {menuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6"  x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div
          role="dialog"
          aria-label="Mobile navigation"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            background: "var(--color-surface)",
            borderBottom: "1px solid var(--color-border)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            animation: "fadeDown 200ms ease-out both",
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item}
              href={"#" + item.toLowerCase()}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--color-text)",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
              }}
            >
              {item}
            </Link>
          ))}
          
          <Link
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: "0.7rem 1.2rem",
              borderRadius: "8px",
              background: "var(--color-accent)",
              color: "var(--color-oceanic-noir)",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              textAlign: "center",
              fontFamily: "var(--font-jetbrains)",
            }}
          >
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
