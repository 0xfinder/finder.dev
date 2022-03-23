import React from "react"
import initialTheme from "./theme"

export const defaultTheme = initialTheme

export const ThemeProvider = React.createContext({
  theme: defaultTheme,
  setTheme: () => {},
})

export const LanyardProvider = React.createContext({})
