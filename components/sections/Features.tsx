import type { ReactNode } from 'react'

interface Feature {
  title: string
  description: string
  icon: ReactNode
}

/* ─── Icon components ────────────────────────────────────────────────────── */

function RadarIcon() {
  return (
    <svg className="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <path d="M1.42 9a16 16 0 0121.16 0" />
      <path d="M5 12.55a11 11 0 0114.08 0" />
      <path d="M8.53 16.11a6 6 0 016.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg className="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg className="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function TeamIcon() {
  return (
    <svg className="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg className="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

/* ─── Feature data ───────────────────────────────────────────────────────── */

const features: Feature[] = [
  {
    title: 'Competitor Tracking',
    description:
      'Automatically monitor competitor websites, pricing pages, job boards, and press releases — no manual research required.',
    icon: <RadarIcon />,
  },
  {
    title: 'Real-Time Alerts',
    description:
      'Get notified the moment a signal that matters emerges. Define what to watch and let SignalScout stay vigilant 24/7.',
    icon: <BellIcon />,
  },
  {
    title: 'Signal Dashboards',
    description:
      'Visualize the competitive landscape with clean, shareable dashboards. Give every stakeholder exactly the view they need.',
    icon: <ChartIcon />,
  },
  {
    title: 'Team Battlecards',
    description:
      'Turn raw signals into ready-to-use sales and strategy content. Arm your team with intelligence before every pitch.',
    icon: <TeamIcon />,
  },
  {
    title: 'Market Signal Detection',
    description:
      'Surface emerging industry trends before they become headlines. Stay ahead of market shifts, not just competitor moves.',
    icon: <SearchIcon />,
  },
  {
    title: 'Enterprise-Grade Security',
    description:
      'Built with security at the core. Role-based access, audit logs, and SOC 2-ready infrastructure protect your intelligence.',
    icon: <ShieldIcon />,
  },
]

/* ─── Component ─────────────────────────────────────────────────────────── */

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4 leading-tight">
            Everything you need to stay ahead
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            SignalScout combines powerful competitive detection with an interface your whole
            team will actually use.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/10 hover:bg-white/[0.15] border border-white/15 rounded-xl p-6 transition-colors duration-150"
            >
              {/* Icon container */}
              <div className="w-10 h-10 bg-brand-orange/20 border border-brand-orange/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-orange/30 transition-colors duration-150">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
