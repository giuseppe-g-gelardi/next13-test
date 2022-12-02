'use client'
import { ReactNode } from "react";

import { ThemeProvider } from '@wits/next-themes'
import { PokemonProvider } from "./context/PokemonContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <div>
      <ThemeProvider attribute="class">
        <PokemonProvider>
          {children}
        </PokemonProvider>
      </ThemeProvider>
    </div>
  )
}
