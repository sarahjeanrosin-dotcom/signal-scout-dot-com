import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SignalScout — Competitive Intelligence for Modern Teams',
  description:
    'Track competitor moves, surface market signals, and act before the window closes. SignalScout gives your team the intelligence edge.',
  openGraph: {
    title: 'SignalScout — Competitive Intelligence for Modern Teams',
    description:
      'Track competitor moves, surface market signals, and act before the window closes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-brand-blue antialiased">{children}</body>
    </html>
  )
}
