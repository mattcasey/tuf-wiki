module.exports = {
  siteMetadata: {
    siteTitle: `TUF Wiki`,
    defaultTitle: `TUF Wiki`,
    siteTitleShort: `TUF Wiki`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://rocketdocs.netlify.com`,
    siteAuthor: `@darnocer`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#FDC907`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/darnocer/tuf-wiki`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    // {
    //   resolve: "@mkitio/gatsby-theme-password-protect",
    //   options: {
    //     password: "sUp3rS3cR3t", // delete or `undefined` to disable password protection
    //   },
    // },
    `gatsby-plugin-offline`,
    // {
    //   resolve: "gatsby-plugin-mdx",
    //   options: {
    //     root: __dirname,
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 500,
    //           linkImagesToOriginal: false,
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
};
