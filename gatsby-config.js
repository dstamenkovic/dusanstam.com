require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Dusan Stamenkovic',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout'),
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
