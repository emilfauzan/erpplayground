import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin-ext'], weight: ["400"]  })

export const metadata: Metadata = {
  title: 'NT Corp Online Analytics',
  description: 'All-purpose digital administration system ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
