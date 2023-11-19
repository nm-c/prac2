import type { Metadata } from 'next'
import { Gaegu } from 'next/font/google'
import './globals.css'

const gaegu = Gaegu({
  weight: ['300', '400', '700'],
  variable: '--font-gaegu',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE) : undefined,
  title: 'Practice Pages',
  description: 'This is the practice site for the next.js and some other stuff.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={gaegu.variable}>
      <body>{children}</body>
    </html>
  )
}
