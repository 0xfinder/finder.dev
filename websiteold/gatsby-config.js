module.exports = {
  siteMetadata: {
    title: `Finder`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `thoughts and stuff.`,
    social: {
      twitter: `0xfinder`,
      github: `0xfinder`,
    },
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
}
