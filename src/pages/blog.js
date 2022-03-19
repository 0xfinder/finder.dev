import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(staticQuery)

  return (
    <Layout pageTitle="My blog posts">
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage

const staticQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`
