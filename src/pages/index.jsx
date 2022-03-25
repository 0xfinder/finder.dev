import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostList from "../components/PostList"
import { Grid, Stack } from "@chakra-ui/react"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <Stack as="section" flexFlow="column" spacing={6} width="100%">
        <Grid gap={10}>
          {posts.map(post => (
            <PostList node={post} key={post.id} />
          ))}
        </Grid>
      </Stack>
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
      }
    }
  }
`
