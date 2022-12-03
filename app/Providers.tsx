'use client'

import { ReactNode } from "react";

import { ThemeProvider } from '@wits/next-themes'
import { PokemonProvider } from "./context/PokemonContext";

// * Because layout.tsx is only rendered on the server-side, we can use the
// * ThemeProvider and PokemonProvider components directly in the RootLayout
// * component. 

// * This is not possible in the app.tsx file because it is rendered
// * on both the server-side and the client-side.

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <PokemonProvider>
        {children}
      </PokemonProvider>
    </ThemeProvider>
  )
}
