import { GatsbyNode } from 'gatsby';
import path from 'path';
import slugify from 'slugify';

interface DatoCmsCruise {
  id: string;
  place: string;
  date: string;
}

interface AllDatoCmsCruiseData {
  allDatoCmsCruise: {
    nodes: DatoCmsCruise[];
  };
}

export const onPostBuild: GatsbyNode['onPostBuild'] = async ({ reporter }) => {
  reporter.info('Your Gatsby site has been built!');
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const rejsTemplate = path.resolve('src/templates/RejsTemplate.tsx');

  const result = await graphql<AllDatoCmsCruiseData>(`
    query ResultQuery {
      allDatoCmsCruise {
        nodes {
          id
          place
          date
        }
      }
    }
  `);

  const createNodePages = (basePath: string) => {
    const cruises: DatoCmsCruise[] = result.data?.allDatoCmsCruise.nodes || [];

    cruises.forEach((cruise) => {
      const { id, place, date } = cruise;
      const tag = `${place} ${date}`;
      const slug = `/${basePath}/${slugify(tag.toLowerCase())}`;

      createPage({
        path: slug,
        component: rejsTemplate,
        context: {
          id,
        },
      });
    });
  };

  createNodePages('rejsy');
  createNodePages('staze');
};
