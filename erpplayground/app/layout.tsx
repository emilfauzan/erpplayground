import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './views/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NT Corp Online Analytics',
  description: 'All-purpose digital administration system ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}