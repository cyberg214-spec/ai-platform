"use client";
const logos = [
  { name: "Stripe",    icon: "link-solid" },
  { name: "Notion",    icon: "cube-16-solid" },
  { name: "Linear",    icon: "chart-pie" },
  { name: "Vercel",    icon: "arrow-trending-up" },
  { name: "Supabase",  icon: "cog-8-tooth" },
  { name: "Figma",     icon: "link" },
  { name: "Loom",      icon: "arrow-path" },
];

export default function Social() {
  return (
    <section
      id="social"
      aria-label="Trusted by leading companies"
      style={{
        padding: "3.5rem 2rem",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-surface)",
        textAlign: "center",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontSize: "0.75rem",
          color: "var(--color-muted)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontFamily: "var(--font-jetbrains)",
          marginBottom: "2rem",
          opacity: 0.7,
        }}
      >
        Trusted by teams at
      </p>

      {/* Logo row */}
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              opacity: 0.5,
              transition: "opacity var(--ease-hover)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.opacity = "0.5";
            }}
          >
            <img
              src={"/icons/" + logo.icon + ".svg"}
              alt=""
              width={18}
              height={18}
              style={{ filter: "invert(1)", opacity: 0.8 }}
            />
            <span
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
              }}
            >
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      {/* Divider stats */}
      <div
        style={{
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "3rem",
          paddingTop: "2.5rem",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        {[
          { value: "500+", label: "Enterprise Clients" },
          { value: "$2.4B", label: "Revenue Automated" },
          { value: "140+", label: "Countries Served" },
          { value: "4.9/5", label: "Avg Rating" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "var(--color-forsythia)",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--color-muted)",
                marginTop: "0.25rem",
                fontFamily: "var(--font-inter)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}