import { useEffect, useRef } from "react";

/**
 * A small dot that trails the pointer with soft spring interpolation.
 * Desktop / fine-pointer only. Never blocks default cursor semantics —
 * it's additive atmosphere, not a replacement for accessible focus states.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || prefersReduced) return undefined;

    function handleMove(e) {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    }
    window.addEventListener("mousemove", handleMove);

    let raf;
    function tick() {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
}
