// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react"

const baseColors = {
  text: {
    100: {
      dark: "#eee",
      light: "#29292c",
    },
    300: {
      dark: "#9eaab7",
      light: "#454547",
    },
    500: {
      dark: "#718096",
      light: "#38404e",
    },
  },
  bg: {
    100: {
      light: "#f3f3f3",
      dark: "#141621",
    },
    300: {
      light: "#e2e9ec",
      dark: "#181b2b",
    },
    500: {
      light: "#E5E7EB",
      dark: "#232735",
    },
  },
}

const fontFamily =
  "'Wotfard',-apple-system,'Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans',sans-serif,'BlinkMacSystemFont','Helvetica Neue','Arial','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'"

export default extendTheme({
  colors: {
    ...baseColors,
    primary: "#ffb347",
    backgroundColor: "#142621",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: fontFamily,
    body: fontFamily,
  },
  fontSizes: {
    xs: "13px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "38px",
    "4xl": "48px",
    "5xl": "56px",
  },
})
