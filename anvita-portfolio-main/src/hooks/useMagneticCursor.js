import { useEffect, useRef } from "react";

/**
 * Attach to any element via the returned ref to give it a gentle
 * magnetic pull toward the cursor on hover — used for CTAs and
 * project cards. Disabled automatically for touch devices.
 */
export default function useMagneticCursor(strength = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || prefersReduced) return undefined;

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${relX * strength}px, ${
        relY * strength
      }px)`;
    }

    function handleLeave() {
      el.style.transform = "translate(0px, 0px)";
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
