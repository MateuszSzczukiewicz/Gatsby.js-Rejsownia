// import React from 'react';
// import { graphql } from 'gatsby';
// import {
//   Place,
//   Gallery,
//   OfferDescription,
//   OfferDetailsList,
//   OfferTitle,
//   StyledContentWrapper,
// } from 'assets/styles/pages/rejs.styles.ts';
// import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import { ContactDetails } from 'components/ContactDetails/ContactDetails';
//
// interface RejsTemplateProps {
//   data: {
//     rejs: {
//       tytul: string;
//       dataRejsu: string;
//       koszt: string;
//       kontakt: string;
//       opis: {
//         childMarkdownRemark: {
//           html: string;
//         };
//       };
//       galeria: Array<{
//         file: {
//           url: string;
//         };
//       }>;
//       miejsce: string;
//     };
//   };
// }
//
// const galleryOptions = {
//   showStatus: false,
//   showThumbs: false,
//   infiniteLoop: true,
// };
//
// const RejsTemplate: React.FC<RejsTemplateProps> = ({ data: { rejs } }) => (
//   <StyledContentWrapper>
//     <OfferTitle>
//       <Place>{oferta.miejsce}</Place>
//       <HighlightedHeading>{oferta.tytul}</HighlightedHeading>
//     </OfferTitle>
//     <Gallery>
//       <Carousel {...galleryOptions}>
//         {oferta.galeria.map((item) => (
//           <img src={item.file.url} key={item.file.url} alt="#" />
//         ))}
//       </Carousel>
//     </Gallery>
//     <OfferDescription
//       dangerouslySetInnerHTML={{
//         __html: rejs.opis.childMarkdownRemark.html,
//       }}
//     />
//     <OfferDetailsList>
//       <li>
//         <div>
//           <p>Data rejsu:</p>
//           <p>{oferta.typBudynku}</p>
//         </div>
//       </li>
//       <li>
//         <div>
//           <p>Koszt:</p>
//           <p>{oferta.koszt}</p>
//         </div>
//       </li>
//     </OfferDetailsList>
//     <ContactDetails contact={oferta.kontakt} />
//   </StyledContentWrapper>
// );
//
// export const query = graphql`
//   query ($id: String) {
//     rejs: (id: { eq: $id }) {
//       tytul
//       dataRejsu
//       koszt
//       kontakt
//       opis {
//         childMarkdownRemark {
//           html
//         }
//       }
//       galeria {
//         file {
//           url
//         }
//       }
//       miejsce
//     }
//     avatar: file(relativePath: { regex: "/kontakt/0_hero.jpg/" }) {
//       publicURL
//     }
//   }
// `;
//
// export default RejsTemplate;

// import React from 'react';
// import {
//   Place,
//   Gallery,
//   OfferDescription,
//   OfferDetailsList,
//   OfferTitle,
//   StyledContentWrapper,
// } from 'assets/styles/pages/rejs.styles.ts';
// import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import { ContactDetails } from 'components/ContactDetails/ContactDetails';
//
// const galleryOptions = {
//   showStatus: false,
//   showThumbs: false,
//   infiniteLoop: true,
// };
//
// const RejsTemplate: React.FC = () => (
//   <StyledContentWrapper>
//     <OfferTitle>
//       <Place>Grecja</Place>
//       <HighlightedHeading>Rejs w Greji 16.09.2023 - 23.09.2023</HighlightedHeading>
//     </OfferTitle>
//     <Gallery>
//       {/*<Carousel {...galleryOptions}>*/}
//       {/*  {oferta.galeria.map((item) => (*/}
//       {/*    <img src={item.file.url} key={item.file.url} alt="#" />*/}
//       {/*  ))}*/}
//       {/*</Carousel>*/}
//     </Gallery>
//     <OfferDescription />
//     <OfferDetailsList>
//       <li>
//         <div>
//           <p>Data rejsu:</p>
//           <p>16.09.2023 - 23.09.2023</p>
//         </div>
//       </li>
//       <li>
//         <div>
//           <p>Koszt:</p>
//           <p>500 + 150</p>
//         </div>
//       </li>
//     </OfferDetailsList>
//     <ContactDetails />
//   </StyledContentWrapper>
// );
