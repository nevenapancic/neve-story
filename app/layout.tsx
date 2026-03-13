import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Neve's Story | A Memoir",
  description: 'A story about grit, resilience, and a girl figuring it out. From Serbia to Amsterdam, from making rice to writing code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  )
}
