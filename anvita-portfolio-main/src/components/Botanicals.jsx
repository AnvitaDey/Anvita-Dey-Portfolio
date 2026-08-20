// Tiny, minimalistic line-drawing botanical accents.
// Used sparingly — as corner growth, hover-reveals, and dividers. Never large or busy.

export function SprigCorner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 56C10 42 8 28 18 18C24 12 30 10 34 6"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M18 18C14 22 8 22 6 30"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M24 24C20 28 16 28 15 34"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="34" cy="6" r="2" fill="currentColor" />
    </svg>
  );
}

export function WildflowerLine({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 12H70"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="1 4"
        strokeLinecap="round"
      />
      <g transform="translate(90,12)">
        <circle cx="0" cy="0" r="1.6" fill="currentColor" />
        <path
          d="M0 -1.6 C -3 -6, -1 -8, 0 -9 M0 -1.6 C 3 -6, 1 -8, 0 -9 M-1.6 0 C -6 -3, -8 -1, -9 0 M1.6 0 C 6 -3, 8 -1, 9 0"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M130 12H200"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="1 4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IvyVine({ className = "", pathLength = 1 }) {
  return (
    <svg
      viewBox="0 0 40 400"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M20 0C20 40 4 60 10 100C16 140 30 150 24 190C18 230 4 250 12 290C18 320 28 340 20 400"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: 1,
          pathLength,
        }}
      />
    </svg>
  );
}

export function PressedLeaf({ className = "" }) {
  return (
    <svg viewBox="0 0 40 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 20C10 8 20 4 38 2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M8 15C12 12 14 10 16 6M14 12C17 10 19 9 21 6M20 8C22 7 23 6.5 24 5"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
