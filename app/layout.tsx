import React from "react"
import type { Metadata } from 'next'
import { Dancing_Script, Quicksand } from 'next/font/google'

import './globals.css'

const _dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-serif' })
const _quicksand = Quicksand({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Will You Be My Valentine?',
  description: 'A special Valentine\'s Day surprise just for you',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_dancingScript.variable} ${_quicksand.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
