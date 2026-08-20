import useReducedMotion from "../hooks/useReducedMotion";

// Ultra-slow floating dust/pollen motes. Purely atmospheric — decorative,
// aria-hidden, and skipped entirely under reduced motion.
export default function AmbientParticles({ count = 14, className = "" }) {
  const reduced = useReducedMotion();
  if (reduced) return null;

  const motes = Array.from({ length: count }, (_, i) => {
    const left = Math.round((i * 137.5) % 100); // golden-angle spread, deterministic
    const delay = (i * 1.3) % 14;
    const duration = 12 + ((i * 7) % 10);
    const size = i % 3 === 0 ? 3 : 2;
    return { id: i, left, delay, duration, size };
  });

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {motes.map((m) => (
        <span
          key={m.id}
          className="absolute rounded-full bg-bloom-butter/40 dark:bg-night-mist/20"
          style={{
            left: `${m.left}%`,
            bottom: "-5%",
            width: m.size,
            height: m.size,
            animation: `drift ${m.duration}s linear ${m.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
