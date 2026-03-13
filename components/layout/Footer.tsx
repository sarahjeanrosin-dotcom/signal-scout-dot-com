import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

const footerLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Login', href: 'https://www.signal-scout-app.co/signin?next=%2F' },
]

export function Footer() {
  return (
    <footer className="bg-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top row: brand + links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-7 w-auto" />
              <span className="text-white font-semibold">SignalScout</span>
            </Link>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              Know what your competitors are doing before your next meeting.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row: copyright */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} SignalScout. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
