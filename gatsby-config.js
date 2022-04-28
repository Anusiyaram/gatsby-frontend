require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Veda Mandir Academy`,
    description: `Veda Mandir Academy`,
    author: `@gatsbyjs & @strapi`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://strapi-gatsby-postgresql-pro.herokuapp.com/api"
          : "http://localhost:1337",
        collectionTypes: ["article", "category"],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
      cloudName: `dzrqpbrpv`,
      apiKey: `316115841284142`,
      apiSecret: `btuLMK4xsgi3OUNdlwRJXRlDJPQ`,
      resourceType: `image`,
      type: ``,
      prefix: `gatsby-source-cloudinary/`
      }
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}