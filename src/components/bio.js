import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RiGithubFill, RiTwitterFill } from "react-icons/ri"

const Bio = () => {
  const data = useStaticQuery(staticQuery)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../../content/assets/finder.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
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
