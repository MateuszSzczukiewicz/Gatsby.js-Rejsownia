import { Reporter, CreatePageArgs } from 'gatsby';
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

export const onPostBuild = ({ reporter }: { reporter: Reporter }) => {
  reporter.info('Your Gatsby site has been built!');
};

export const createPages = async ({
  graphql,
  actions,
}: {
  graphql: CreatePageArgs['graphql'];
  actions: CreatePageArgs['actions'];
}) => {
  const { createPage } = actions;
  const rejsTemplate = path.resolve('src/templates/RejsTemplate.tsx');

  const result = await graphql<AllDatoCmsCruiseData>(`
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

  const createNodePages = (basePath: string) => {
    const cruises: DatoCmsCruise[] = result.data.allDatoCmsCruise.nodes;

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
