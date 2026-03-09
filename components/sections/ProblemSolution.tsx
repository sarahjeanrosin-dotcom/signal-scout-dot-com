const solutionPoints = [
  'Monitor competitor websites, pricing, job postings, and press — automatically',
  'Surface emerging market signals before they become headlines',
  'Get real-time alerts the moment a competitor makes a move that matters',
  'Share ready-to-use battlecards and summaries across your entire team',
]

function CheckCircleIcon() {
  return (
    <svg
      className="w-5 h-5 text-brand-orange shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function ProblemSolution() {
  return (
    <section id="solution" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Problem column */}
          <div>
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-green mt-3 mb-5 leading-tight">
              Your competitors are moving — and you're finding out too late.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              By the time your team pieces together competitor moves from scattered news alerts,
              LinkedIn searches, and manual spot-checks, the window to respond has already closed.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Critical signals — a pricing change, a new product feature, a key hire — get buried
              under noise. Meanwhile, your competitors move with confidence while you play catch-up.
            </p>
          </div>

          {/* Solution column */}
          <div className="lg:pl-8 lg:border-l border-gray-100">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-green mt-3 mb-6 leading-tight">
              Automated intelligence that never misses a signal.
            </h2>
            <ul className="space-y-4" role="list">
              {solutionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircleIcon />
                  <span className="text-gray-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
