"use client";
import { features } from "@/data/features";
import { useActiveFeature } from "@/hooks/useActiveFeature";

export default function Features() {
  const { activeIndex, setActiveIndex, isMobile, handleDesktopHover } = useActiveFeature();

  return (
    <section
      id="features"
      aria-label="Platform Features"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{
          fontSize: "0.75rem",
          color: "var(--color-accent)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontFamily: "var(--font-jetbrains)",
          marginBottom: "1rem",
        }}>
          Platform Capabilities
        </p>
        <h2 style={{
          fontFamily: "var(--font-jetbrains)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 800,
          color: "var(--color-text)",
          lineHeight: 1.2,
        }}>
          Everything you need to automate at scale
        </h2>
        <p style={{
          color: "var(--color-muted)",
          fontSize: "1rem",
          marginTop: "1rem",
          maxWidth: "520px",
          margin: "1rem auto 0",
          lineHeight: 1.7,
        }}>
          Six core modules. One unified platform. Infinite possibilities.
        </p>
      </div>

      {/* DESKTOP BENTO GRID */}
      {!isMobile && (
        <div
          role="list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "1rem",
          }}
        >
          {features.map((feature, index) => {
            const isActive = activeIndex === index;
            const isLarge = feature.size === "large";

            return (
              <article
                key={feature.id}
                role="listitem"
                aria-label={feature.title}
                style={{
                  gridColumn: isLarge ? "span 2" : "span 1",
                  background: isActive ? "var(--color-surface)" : "rgba(23,43,54,0.5)",
                  border: "1px solid",
                  borderColor: isActive ? feature.color : "var(--color-border)",
                  borderRadius: "16px",
                  padding: "2rem",
                  cursor: "pointer",
                  transition: "border-color var(--ease-hover), background var(--ease-hover), transform var(--ease-hover), box-shadow var(--ease-hover)",
                  transform: isActive ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isActive ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={() => handleDesktopHover(index)}
                onMouseLeave={() => handleDesktopHover(null)}
              >
                {/* Glow on hover */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: "1px",
                    background: isActive ? feature.color : "transparent",
                    transition: "background var(--ease-hover)",
                  }}
                />

                {/* Icon */}
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: isActive ? feature.color + "22" : "var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  transition: "background var(--ease-hover)",
                }}>
                  <img
                    src={"/icons/" + feature.icon + ".svg"}
                    alt=""
                    width={22}
                    height={22}
                    style={{
                      filter: isActive
                        ? "invert(0.8) sepia(1) saturate(5) hue-rotate(0deg)"
                        : "invert(0.6)",
                      transition: "filter var(--ease-hover)",
                    }}
                  />
                </div>

                {/* Text */}
                <h3 style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: isActive ? "var(--color-text)" : "var(--color-muted)",
                  marginBottom: "0.6rem",
                  transition: "color var(--ease-hover)",
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: "0.88rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.7,
                  opacity: isActive ? 1 : 0.7,
                  transition: "opacity var(--ease-hover)",
                }}>
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      )}

      {/* MOBILE ACCORDION */}
      {isMobile && (
        <div role="list" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {features.map((feature, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                key={feature.id}
                role="listitem"
                style={{
                  border: "1px solid",
                  borderColor: isOpen ? feature.color : "var(--color-border)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "var(--color-surface)",
                  transition: "border-color var(--ease-layout)",
                }}
              >
                {/* Accordion header */}
                <button
                  aria-expanded={isOpen}
                  aria-controls={"feature-panel-" + index}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.1rem 1.25rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    gap: "1rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: isOpen ? feature.color + "22" : "var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background var(--ease-hover)",
                    }}>
                      <img
                        src={"/icons/" + feature.icon + ".svg"}
                        alt=""
                        width={18}
                        height={18}
                        style={{ filter: "invert(0.7)" }}
                      />
                    </div>
                    <span style={{
                      fontFamily: "var(--font-jetbrains)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: isOpen ? "var(--color-text)" : "var(--color-muted)",
                      textAlign: "left",
                      transition: "color var(--ease-hover)",
                    }}>
                      {feature.title}
                    </span>
                  </div>

                  {/* Chevron */}
                  <img
                    src={isOpen ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"}
                    alt=""
                    width={18}
                    height={18}
                    style={{
                      filter: "invert(0.6)",
                      flexShrink: 0,
                      transition: "transform var(--ease-layout)",
                      transform: isOpen ? "rotate(0deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {/* Accordion panel */}
                <div
                  id={"feature-panel-" + index}
                  role="region"
                  aria-label={feature.title}
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    overflow: "hidden",
                    transition: "max-height var(--ease-layout)",
                  }}
                >
                  <p style={{
                    padding: "0 1.25rem 1.25rem",
                    fontSize: "0.88rem",
                    color: "var(--color-muted)",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-inter)",
                  }}>
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}