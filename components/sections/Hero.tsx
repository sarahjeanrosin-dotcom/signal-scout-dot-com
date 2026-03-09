import Link from 'next/link'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 lg:py-36 px-4 sm:px-6 lg:px-8">
      {/* Subtle radial glow rings — pure CSS, zero JS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[640px] h-[640px] rounded-full bg-white/5" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[960px] h-[960px] rounded-full bg-white/[0.03]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Early access badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-brand-orange rounded-full" aria-hidden="true" />
          Now in Early Access
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Bridge the Gap with{' '}
          <span className="text-brand-orange">SignalScout</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Track competitor moves, surface market signals, and act before the window closes.
          SignalScout gives your team the competitive intelligence edge — automatically.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#get-started"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-orange hover:brightness-90 text-white font-semibold px-8 py-3.5 rounded-md text-base transition-[filter] duration-150"
          >
            Get Started
          </Link>
          <Link
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/15 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-3.5 rounded-md text-base transition-colors duration-150"
          >
            See Pricing
          </Link>
        </div>

        {/* Social proof whisper */}
        <p className="mt-10 text-white/45 text-sm">
          Trusted by strategy, product, and sales teams at B2B companies
        </p>
      </div>
    </section>
  )
}
