import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(staticQuery)

  const author = data.site.siteMetadata?.author
  return (
    <footer>
      <div>
        ©{author.name}, {new Date().getFullYear()}
      </div>
      <div>
        Built with{" "}
        <span role="img" aria-label="love">
          💜
        </span>{" "}
        using <a href="https://www.gatsbyjs.com">Gatsby</a> and{" "}
        <a href="https://mdxjs.com/">MDX</a>
        {"."}
      </div>
    </footer>
  )
}

export default Footer

const staticQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        author {
          name
        }
        social {
          twitter
        }
      }
    }
  }
`
