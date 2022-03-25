import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang = "en", title, canonical }) => {
  const { site } = useStaticQuery(staticQuery)

  const { siteUrl } = site.siteMetadata
  const metaDescription = description || site.siteMetadata.description
  const siteTitle = title || site.siteMetadata.title

  const data = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `og:siteTitle`,
      content: siteTitle,
    },
    {
      name: `og:description`,
      content: metaDescription,
    },
    {
      name: "og:site_name",
      content: "Finder",
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.social.twitter,
    },
    {
      name: "twitter:site",
      content: site.siteMetadata.social.twitter,
    },
    {
      name: `twitter:siteTitle`,
      content: siteTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: "og:title",
      content: siteTitle,
    },
    {
      name: "og:description",
      content: metaDescription,
    },
  ]
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
    >
      {data.map(({ name, content }) => (
        <meta name={name} content={content} key={name} />
      ))}
      {canonical && (
        <link rel="canonical" href={new URL(canonical, siteUrl).href} />
      )}
      <meta name="theme-color" content={site.siteMetadata.themeColor} />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo

const staticQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        themeColor
        description
        social {
          twitter
        }
      }
    }
  }
`
