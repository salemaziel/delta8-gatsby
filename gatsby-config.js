var dotenv = require("dotenv");
dotenv.config();

const { spaceId, accessToken, snipcart } = process.env;

module.exports = {
  siteMetadata: {
    title: `Delta8`,
    description: `Delta8THC E-commerce shop demo by SalemAziel`,
    author: `@salemaziel`,
  },
  plugins: [{
      "resolve": "gatsby-source-flotiq",
      "options": {
        "baseUrl": process.env.GATSBY_FLOTIQ_BASE_URL,
        "authToken": process.env.GATSBY_FLOTIQ_API_KEY,
        "forceReload": false,
        "includeTypes": ['product', 'category', '_media']
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Delta8THC Demo`,
        short_name: `Delta8`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#28A745`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true,
      },
    },
  ],
}
