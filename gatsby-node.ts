import { GatsbyNode } from 'gatsby';
import path from 'path';
import slugify from 'slugify';

// interface DatoCmsKafelek {
//   id: string;
//   miejsce: string;
//   data: string;
// }

const onPostBuild: GatsbyNode['onPostBuild'] = ({ reporter }) => {
  reporter.info('Your Gatsby site has been built!');
};

const createRejsPage: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const rejsTemplate = path.resolve('src/templates/RejsTemplate.tsx');
  const result = await graphql(`
    query {
      allDatoCmsKafelek {
        nodes {
          id
          miejsce
          data
        }
      }
    }
  `);

  result.data.allDatoCmsKafelek.nodes.forEach((node) => {
    const tag = `${node.miejsce} ${node.data}`;
    const slug = `/rejsy/${slugify(tag.toLowerCase())}`;

    createPage({
      path: slug,
      component: rejsTemplate,
      context: {
        id: node.id,
      },
    });
  });
};

export { onPostBuild, createRejsPage };
