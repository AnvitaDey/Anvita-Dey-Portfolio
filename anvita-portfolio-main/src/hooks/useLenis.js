import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initializes buttery smooth scrolling.
 * Respects prefers-reduced-motion by skipping entirely —
 * native scroll behavior takes over, which is the accessible default.
 */
export default function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4), // slow, cinematic decel
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [enabled]);
}
