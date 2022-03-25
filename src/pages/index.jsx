import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Bio from "../components/Bio"
import { Layout, LayoutContent } from "../components/Layout"
import Seo from "../components/Seo"
import PostList from "../components/PostList"
import { Flex, Text, Grid, Stack } from "@chakra-ui/react"
import { RiGithubFill, RiRssFill } from "react-icons/ri"
import ExternalLink from "../components/ExternalLink"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Finder`
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <Seo canonical="/" title={siteTitle} />
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <LayoutContent
        maxWidth="1200px"
        margin={["0 auto", null, "5% auto", "8% auto"]}
        gridAutoFlow={["row", null, null]}
        gridTemplateColumns={["1fr", null, null, "3fr 4fr"]}
      >
        <Bio as="section" />
        <Stack as="section" flexFlow="column" spacing={6} width="100%">
          <Flex
            flexFlow="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Flex alignItems="center">
              <Text
                fontSize="md"
                color="text.300"
                textTransform="uppercase"
                letterSpacing="1.5px"
                fontWeight="medium"
              >
                {posts.length} Posts
              </Text>
              <ExternalLink color="text.300" ml={2} href="/rss.xml">
                <RiRssFill size={15} />
              </ExternalLink>
            </Flex>
            <Flex alignItems="center">
              <ExternalLink
                color="text.300"
                fontSize="xs"
                mr={2}
                href="https://github.com/0xfinder/finder.dev"
              >
                View the site's code
              </ExternalLink>
              <RiGithubFill size={18} />
            </Flex>
          </Flex>
          <Grid gap={10}>
            {posts.map(post => (
              <PostList node={post} key={post.id} />
            ))}
          </Grid>
        </Stack>
      </LayoutContent>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        timeToRead
        id
      }
    }
  }
`
