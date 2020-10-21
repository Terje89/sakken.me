// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: `https://sakken.me`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-TKJWB2S",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

      // Name of the event that is triggered
      // on every Gatsby route change.
      //
      // Defaults to gatsby-route-change
      routeChangeEventName: "Route",
    },
  },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    }
  ]
}
