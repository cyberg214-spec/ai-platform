"use client";
import { useState, useEffect, useRef } from "react";

export function useActiveFeature() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const prevDesktopActive = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;

      // KEY REQUIREMENT: transfer active index from desktop hover to mobile accordion
      if (mobile && !isMobile) {
        if (prevDesktopActive.current !== null) {
          setActiveIndex(prevDesktopActive.current);
        }
      }

      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  const handleDesktopHover = (index: number | null) => {
    prevDesktopActive.current = index;
    setActiveIndex(index);
  };

  return { activeIndex, setActiveIndex, isMobile, handleDesktopHover };
}