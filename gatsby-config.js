const path = require('path');
module.exports = {
  siteMetadata: {
    title: `portfolio website`,
    pathPrefix: "/portfolio-website",
    siteUrl: 'https://drink-some-water.github.io/portfolio-website/',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: path.resolve(__dirname, 'src/images'),
      },
    },
  ],
};
