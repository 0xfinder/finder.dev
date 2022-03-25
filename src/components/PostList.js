import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { forwardRef } from "@chakra-ui/system"
import { RoughNotation } from "react-rough-notation"
import { colors } from "../data/theme"

const PostHead = forwardRef(({ date, readingTime, ...props }, ref) => {
  return (
    <Flex
      alignItems="center"
      mb={2}
      color="gray.500"
      fontSize="14px"
      ref={ref}
      {...props}
    >
      <Box as="time" dateTime="date" color="inherit">
        {date}
      </Box>
      <Box mx="10px" color="inherit">
        ·
      </Box>
      <Text color="inherit">{readingTime} min read</Text>
    </Flex>
  )
})

const PostList = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const [hover, setHover] = React.useState(false)

  return (
    <GatsbyLink to={node.fields.slug} key={node.id}>
      <Flex
        flexFlow="column"
        as="article"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <PostHead date={node.frontmatter.date} readingTime={node.timeToRead} />
        <Heading
          as="h2"
          display="inline"
          fontSize="lg"
          color="text.100"
          fontWeight="bold"
          mb={1}
        >
          <RoughNotation
            type="highlight"
            show={hover}
            color={colors.highlight.dark}
          >
            {title}
          </RoughNotation>
        </Heading>
        <Text as="p" fontSize="md" color="text.300">
          {node.frontmatter.description}
        </Text>
      </Flex>
    </GatsbyLink>
  )
}

export default PostList
