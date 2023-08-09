import type { GatsbyConfig } from 'gatsby';
import path from 'path';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'la-yachting',
    siteUrl: 'https://la-yachting.pl',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.GATSBY_API_TOKEN,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icons-components/favicon.png',
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
        extensions: ['js', 'jsx', 'ts', 'tsx'],
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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/icons-components/,
        },
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
  ],
};

export default config;
