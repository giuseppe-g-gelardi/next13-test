import { ReactNode } from "react";
import { ServerThemeProvider } from "next-themes";
import Providers from "./Providers";
import Header from "./components/Header";
import "./output.css";
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" className={roboto.className}>
        <head />
        <body>
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
