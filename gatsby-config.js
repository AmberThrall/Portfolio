module.exports = {
  siteMetadata: {
    title: `Amber Thrall`,
    author: `Amber Thrall`,
    description: `Mathematician.`,
    siteUrl: `https://amber.thrall.me/`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Amber Thrall",
        short_name: "Amber Thrall",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#c53211",
        display: "standalone",
        icon: "static/img/logo_heart.png"
      }
    },
    'gatsby-plugin-offline'
  ]
}
