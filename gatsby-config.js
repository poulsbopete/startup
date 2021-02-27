/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Seek Imprints",
    titleTemplate: "%s | Your creativity source",
    description: "Amazing designs imprinted on just about anything",
    siteUrl: "https://seekimprints.com",
    author: "Peter Simkins",
    authorSite: "https://seekimprints.com",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "seekimprints@twitter",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
