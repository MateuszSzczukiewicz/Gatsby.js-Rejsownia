import { GatsbyNode, Reporter } from 'gatsby';
import path from 'path';
import slugify from 'slugify';

exports.onPostBuild = ({ reporter }: { reporter: Reporter }) => {
  reporter.info('Your Gatsby site has been built!');
};

interface DatoCmsCruise {
  id: string;
  place: string;
  date: string;
}

const createRejsPage: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const rejsTemplate = path.resolve('src/templates/RejsTemplate.tsx');
  const { data } = await graphql<{
    allDatoCmsCruise?: { nodes: DatoCmsCruise[] };
  }>(`
    query {
      allDatoCmsCruise {
        nodes {
          id
          place
          date
        }
      }
    }
  `);

  const cruises = data?.allDatoCmsCruise?.nodes || [];

  cruises.forEach(({ id, place, date }) => {
    const tag = `${place} ${date}`;
    const slug = `/rejsy/${slugify(tag.toLowerCase())}`;

    createPage({
      path: slug,
      component: rejsTemplate,
      context: {
        id,
      },
    });
  });
};

export default createRejsPage;
