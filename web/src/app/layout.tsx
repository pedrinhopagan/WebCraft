import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto } from 'next/font/google'
import Header from '@/components/Main/Header'
import BackToTop from '@/components/general/BackToTop'
import localFont from '@next/font/local'

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-main',
})

const roboto = Roboto({ subsets: ['latin'], variable: '--font-alt' })

export const metadata = {
  title: 'WebCraft',
  description: 'Showcase of Julios and Pedros Web Developer Skills',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${satoshi.variable} z-0 overflow-x-hidden bg-mainPalette-bg`}
      >
        <Header />
        {children}

        <BackToTop />
      </body>
    </html>
  )
}
