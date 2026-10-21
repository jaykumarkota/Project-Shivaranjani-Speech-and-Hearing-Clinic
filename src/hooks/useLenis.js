import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Initializes Lenis smooth scrolling and returns the instance ref.
 * Lenis uses its own RAF loop to intercept native scroll and apply
 * a buttery-smooth easing — the same technique used by Awwwards-level sites.
 */
export default function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // scroll duration (seconds) — premium feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,     // natural feel on mobile
    });

    lenisRef.current = lenis;

    // Expose lenis globally so other components can call lenis.scrollTo()
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.__lenis = null;
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
