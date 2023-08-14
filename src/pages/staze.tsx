import React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { EmptyState, Gallery, IntroSection } from 'assets/styles/pages/rejsy.styles.ts';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

interface StazeProps {
  data: {
    thumbnail: {
      publicURL: string;
    };
  };
}

const Staze: React.FC<StazeProps> = ({ data }) => {
  return (
    <ContentWrapper>
      <IntroSection>
        <HighlightedHeading>Nasza oferta stażów oraz rejsów szkoleniowych</HighlightedHeading>
        <p>
          Bezustannie przeszukujemy bogatą gamę stażów oraz rejsów szkoleniowych, gotowych zaspokoić
          każde gusta podróżników. Wybierz rodzaj rejsu, który wzbudza Twoje zainteresowanie.
        </p>
      </IntroSection>
      <Gallery>
        <Thumbnail
          imageSource={data.thumbnail.publicURL}
          miejsce="Grecja"
          data="01.01.2021 - 02.02.2021"
        />
        <Thumbnail
          imageSource={data.thumbnail.publicURL}
          miejsce="Sycylia"
          data="02.02.2022 - 03.03.2022"
        />
        <Thumbnail
          imageSource={data.thumbnail.publicURL}
          miejsce="Wyspy Kanaryjskie"
          data="03.03.2023 - 04.04.2023"
        />
        <Thumbnail
          imageSource={data.thumbnail.publicURL}
          miejsce="Karaiby"
          data="04.04.2024 - 05.05.2024"
        />
        <Thumbnail
          imageSource={data.thumbnail.publicURL}
          miejsce="Norwegia"
          data="05.05.2025 - 06.06.2025"
        />
      </Gallery>
      <EmptyState>
        <h2>Brak stażów i rejsów szkoleniowych</h2>
        <h3>Już niebawem nowe staże i rejsy szkoleniowe od L.A. Yachting</h3>
      </EmptyState>
    </ContentWrapper>
  );
};

export const query = graphql`
  query {
    thumbnail: file(relativePath: { regex: "/rejsy/temporary-thumbnail.jpg/" }) {
      publicURL
    }
  }
`;

// const Staze = () => {
//   return (
//     <ContentWrapper>
//       <IntroSection>
//         <HighlightedHeading>Nasza oferta stażów oraz rejsów szkoleniowych</HighlightedHeading>
//         <p>
//           Bezustannie przeszukujemy bogatą gamę stażów oraz rejsów szkoleniowych, gotowych zaspokoić
//           każde gusta podróżników. Wybierz rodzaj rejsu, który wzbudza Twoje zainteresowanie.
//         </p>
//       </IntroSection>
//       {staze.length ? (
//         <Gallery>
//           {staze.map((staze) => (
//             <Thumbnail
//               key={staze.id}
//               imageSource={staze.galeria[0].file.url}
//               address={staze.miejsce}
//               title={staze.data}
//             />
//           ))}
//         </Gallery>
//       ) : (
//         <EmptyState>
//           <h2>Brak stażów i rejsów szkoleniowych</h2>
//           <h3>Już niebawem nowe staże i rejsy szkoleniowe od L.A. Yachting</h3>
//         </EmptyState>
//       )}
//     </ContentWrapper>
//   );
// };

// export const query = graphql`
//   query {
//     staze: allDatoCmsAsset {
//       nodes {
//         id
//         miejsce
//         data
//         galeria {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// `;

export default Staze;
