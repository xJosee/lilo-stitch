import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invitación a ver Lilo y Stitch',
  description: 'Invitación a ver Lilo y Stitch con mucho amor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
