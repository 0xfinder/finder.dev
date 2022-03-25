import React from "react"
import { Box, Flex, Grid } from "@chakra-ui/layout"
import { forwardRef } from "@chakra-ui/system"
import { domAnimation, LazyMotion } from "framer-motion"
import { transition } from "../data/theme"

export const Hr = forwardRef((props, ref) => {
  return (
    <Box
      as="hr"
      my={3}
      transition={transition}
      background="borderSubtle"
      border="none"
      height="1px"
      {...props}
      ref={ref}
    />
  )
})

export const layoutContentPadding = [6, 8]

export const LayoutContent = forwardRef((props, ref) => {
  return (
    <Box width="100%" overflow="hidden">
      <Grid
        as="main"
        color="text.100"
        fontWeight="regular"
        gap={12}
        p={layoutContentPadding}
        ref={ref}
        {...props}
      >
        {props.children}
      </Grid>
    </Box>
  )
})

export function Layout({
  children,
  header,
  imageTop,
  imageBottom,
  article,
  ...rest
}) {
  return (
    <Flex flexFlow="column nowrap">
      <LazyMotion features={domAnimation}>
        <Box {...rest}>{children}</Box>
      </LazyMotion>
    </Flex>
  )
}
