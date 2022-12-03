import { ReactNode } from "react";
import { ServerThemeProvider } from "next-themes";
import { Quicksand } from '@next/font/google'

import Providers from "./Providers";
import Header from "./components/Header";
import "./output.css";

const quicksand = Quicksand()

// * The ServerThemeProvider component is used to ensure that the correct
// * theme is applied on the server-side. It is not required on the client-side.

// * It wraps the html element and takes an attribute prop which is the attribute
// * that will be used to set the theme class on the html element.
// * The default value is "class".
// * The theme class will be applied to the html element on the server-side
// * and then removed on the client-side to prevent a flash of unstyled content.

// * The Providers component wraps the app and provides the context for the
// * useTheme and usePokemon hooks.

export default function RootLayout({ children }: { children: ReactNode }) {

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
