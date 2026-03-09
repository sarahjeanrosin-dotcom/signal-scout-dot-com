import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: '../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
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
