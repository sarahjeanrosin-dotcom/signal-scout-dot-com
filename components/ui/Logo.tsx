interface LogoProps {
  className?: string
}

/**
 * Geometric fox head silhouette with signal arcs — the SignalScout logomark.
 *
 * The fox shape is constructed from a single polygon path that traces
 * two pointed ears, a wide angular head, and a narrow chin.
 * Two cubic-bezier arcs to the right represent outbound signal waves.
 */
export function Logo({ className = 'h-8 w-auto' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 68 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SignalScout logomark"
      role="img"
    >
      {/* Geometric fox head — two pointed ears, broad head, tapered chin */}
      <path
        d="M2 24 L11 2 L20 18 L24 13 L28 18 L37 2 L46 24 L42 35 L24 38 L6 35 Z"
        fill="#F26419"
      />
      {/* Signal arc — inner */}
      <path
        d="M52 18 C55 21 55 27 52 30"
        stroke="#F26419"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Signal arc — outer */}
      <path
        d="M57 13 C62 19 62 29 57 35"
        stroke="#F26419"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
