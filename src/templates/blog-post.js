import React from "react"
import {
  Hr,
  Layout,
  LayoutContent,
  layoutContentPadding,
} from "../components/Layout"
import { Link as GatsbyLink, graphql } from "gatsby"
import Seo from "../components/Seo"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { RoughNotation } from "react-rough-notation"
import { MDXProvider } from "@mdx-js/react"
import * as AllMarkdownComponents from "../components/Markdown"
import * as Chakra from "@chakra-ui/layout"
import * as ChakraReact from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import { Table, Td, Th, Tr } from "@chakra-ui/table"
import { Text } from "@chakra-ui/react"
import { transition } from "../data/theme"
import { maxWidth } from "../shared"

const { overrides: MarkdownOverrides, ...rest } = AllMarkdownComponents
const MarkdownComponents = rest
const { Box, Flex, Grid, Heading, Link, HStack } = Chakra

const Navigator = ({ pos, link }) => {
  const isLeft = pos === "left"

  const data = (
    <Box
      p={4}
      m={0}
      transition={transition}
      height="100%"
      overflow="hidden"
      borderRadius="sm"
      borderWidth="1px"
      borderColor="borderSubtle"
    >
      <Heading
        fontSize="md"
        as="h3"
        fontWeight="bold"
        mb={1}
        color={link ? "text.100" : "text.500"}
      >
        {isLeft ? "Previous" : "Next"} Article
      </Heading>
      {link ? (
        <Text as="p" mb={0} fontSize="md" color="text.300">
          {link.frontmatter.title}
        </Text>
      ) : (
        <Text mb={0} as="i" color="text.500" fontSize="md">
          {isLeft ? (
            "Wow you just read the first post. Why are you even here?"
          ) : (
            <>You just read the last post, nice.</>
          )}
        </Text>
      )}
    </Box>
  )

  if (!link) {
    return data
  }

  return (
    <Link
      as={GatsbyLink}
      to={link.fields.slug}
      textDecoration="none !important"
      height="100%"
    >
      {data}
    </Link>
  )
}

function makeHeader(type, fonts = ["xl", null, "2xl"]) {
  return ({ children, ...props }) => (
    <Heading
      as={type}
      mb={4}
      transition={transition}
      fontSize={fonts}
      {...props}
    >
      {children}
    </Heading>
  )
}

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx
  const { previous, next } = data
  const { imageTop, imageBottom } = post.frontmatter

  return (
    <>
      <Layout imageTop={imageTop} imageBottom={imageBottom}>
        <Box transition={transition} pt={[8, 12, 24]}>
          <Grid
            gap={2}
            as="header"
            p={layoutContentPadding}
            mx="auto"
            maxWidth={maxWidth}
          >
            <Heading
              as="h1"
              mb={2}
              textAlign="center"
              color="text.100"
              fontSize={["xl", "2xl", "3xl"]}
              lineHeight="1.4"
              fontWeight="bold"
            >
              {post.frontmatter.title}
            </Heading>
            <Text
              fontSize={["lg", "xl"]}
              fontWeight="medium"
              color="text.300"
              textAlign="center"
            >
              {post.frontmatter.description}
            </Text>
            <Flex alignItems="center" color="text.500" justify="center">
              <Text as="time" dateTime={post.frontmatter.date}>
                {post.frontmatter.date}
              </Text>
              <Box mx={2}>{"–"}</Box>
              <Text>{post.timeToRead} min read</Text>
            </Flex>
            <HStack
              justify="center"
              textTransform="uppercase"
              fontSize="xs"
              spacing={4}
              fontWeight="medium"
            >
              {post.frontmatter.tags.map((tag, i) => (
                <Text color="brand.100" key={tag}>
                  {tag}
                </Text>
              ))}
            </HStack>
          </Grid>
        </Box>
        <LayoutContent mx="auto" maxWidth={maxWidth}>
          <Seo
            canonical={post.slug}
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <Grid as="article" gap={2}>
            <Box
              className="blog-post"
              as="section"
              fontSize="lg"
              lineHeight="1.7"
            >
              <MDXProvider
                scope={{ transition }}
                components={{
                  ...MarkdownComponents,
                  ...MarkdownOverrides,
                  ...Chakra,
                  ...ChakraReact,
                  getImage,
                  GatsbyImage,
                  StaticImage,
                  maxWidth,
                  Text,
                  ChakraImage: Image,
                  Hr,
                  a: ({ children, ...props }) => (
                    <Link color="brandSecondary" {...props}>
                      {children}
                    </Link>
                  ),
                  RoughNotation,
                  h6: makeHeader("h6"),
                  h5: makeHeader("h5"),
                  h4: makeHeader("h4", ["md", "lg", "xl"]),
                  h3: makeHeader("h3"),
                  h2: makeHeader("h2"),
                  h1: makeHeader("h1"),
                  table: ({ children, ...props }) => (
                    <Table mb={6} {...props}>
                      {children}
                    </Table>
                  ),
                  th: Th,
                  tr: Tr,
                  td: ({ children, ...props }) => (
                    <Td
                      fontSize={["sm", "md", "lg"]}
                      verticalAlign="initial"
                      {...props}
                    >
                      {children}
                    </Td>
                  ),
                  blockquote: ({ children, ...props }) => (
                    <Box
                      as="blockquote"
                      borderColor="borderSubtle"
                      borderLeftWidth="2px"
                      borderLeft="solid"
                      paddingInlineStart={4}
                      {...props}
                    >
                      {children}
                    </Box>
                  ),
                  p: ({ children, ...props }) => (
                    <Text
                      as="p"
                      transition={transition}
                      fontSize={["md", null, "lg"]}
                      mb={6}
                      {...props}
                    >
                      {children}
                    </Text>
                  ),
                }}
              >
                <MDXRenderer>{post.body}</MDXRenderer>
              </MDXProvider>
            </Box>

            <Hr />
            <Box as="footer">
              <Grid
                as="section"
                gridAutoFlow="row"
                alignItems="center"
                justifyContent="center"
                gridTemplateColumns={["1fr", null, null, "1fr 1fr"]}
                flexDirection={["row", "column"]}
                gap={4}
                m={0}
                p={0}
                className="justify-center flex flex-row p-0 m-0 text-sm w-fullgap-4"
              >
                <Navigator pos="left" link={previous} />
                <Navigator pos="right" link={next} />
              </Grid>
            </Box>
          </Grid>
        </LayoutContent>
      </Layout>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
