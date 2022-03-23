import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { RiGithubFill, RiTwitterFill } from "react-icons/ri"

const Bio = () => {
  const data = useStaticQuery(staticQuery)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <GatsbyImage image={data.avatar.data.gatsbyImageData} alt="Avy" />
      {author?.name && (
        <p>
          Written by
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            <strong>{author.name}</strong>
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio

const staticQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/avatars/finder.png/" }) {
      data: childImageSharp {
        gatsbyImageData(
          width: 280
          height: 280
          layout: FIXED
          quality: 100
          placeholder: TRACED_SVG
        )
      }
    }
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          twitter
        }
      }
    }
  }
`
