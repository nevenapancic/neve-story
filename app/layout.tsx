import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neve Story | A Memoir',
  description: 'Your morning read with coffee instead of scrolling. A story about bravery, resilience, and never giving up.',
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
