import Link from 'next/link'

export function SecondaryCta() {
  return (
    <section id="get-started" className="bg-brand-green py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
          Start discovering signals today.
        </h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Join forward-thinking teams who use SignalScout to track competitor moves and make
          every strategy decision with confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#get-started-form"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-orange hover:brightness-90 text-white font-semibold px-8 py-4 rounded-md text-base transition-[filter] duration-150"
          >
            Get Started
          </Link>
          <Link
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold px-8 py-4 rounded-md text-base transition-colors duration-150"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
