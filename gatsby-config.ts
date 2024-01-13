import type { GatsbyConfig } from 'gatsby';
import path from 'path';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'L.A. Yachting',
    description:
      'Przygotuj się na niezapomniane przygody na falach z L.A. Yachting. Z ponad trzydziestoletnim doświadczeniem, zapewniamy doskonale zorganizowane rejsy, unikalną żeglarską atmosferę oraz atrakcje zarówno na morzu, jak i na lądzie.',
    image: '/logo.jpg',
    siteUrl: 'https://la-yachting.com',
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.GATSBY_API_TOKEN,
        environment: 'main',
        previewMode: false,
        disableLiveReload: false,
        pageSize: 500,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-testing',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icons/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GATSBY_TRACKING_ID],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        failOnError: false,
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src', 'assets'),
        components: path.join(__dirname, 'src', 'components'),
        helpers: path.join(__dirname, 'src', 'helpers'),
      },
    },
    // prettier-ignore
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['montserrat\:300,400,500,700', 'merriweather\:300,500'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'jsx',
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: true }, { cleanupIDs: true }],
        },
      },
    },
  ],
};

export default config;
