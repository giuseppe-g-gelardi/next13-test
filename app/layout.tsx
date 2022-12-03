import { ReactNode } from "react";
import { ServerThemeProvider } from "next-themes";
import Providers from "./Providers";
import Header from "./components/Header";
import "./output.css";
import { Quicksand } from '@next/font/google'

const quicksand = Quicksand()

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" className={quicksand.className}>
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
