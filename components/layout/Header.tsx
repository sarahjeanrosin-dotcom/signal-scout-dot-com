'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

/**
 * Add items here to extend the navigation — both desktop and mobile
 * menus are generated from this single array.
 */
const navLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Login', href: 'https://www.signal-scout-app.co/signin?next=%2F' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-blue/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Logo className="h-8 w-auto" />
            <span className="text-white font-semibold text-lg tracking-tight">
              SignalScout
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#get-started"
              className="bg-brand-orange hover:brightness-90 text-white text-sm font-semibold px-4 py-2 rounded-md transition-[filter] duration-150"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-white p-2 -mr-2 rounded-md hover:bg-white/10 transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden border-t border-white/10 py-4"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white font-medium py-2 px-2 rounded-md hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-1 border-t border-white/10">
                <Link
                  href="#get-started"
                  onClick={() => setIsOpen(false)}
                  className="block bg-brand-orange hover:brightness-90 text-white font-semibold px-4 py-3 rounded-md text-center transition-[filter]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
