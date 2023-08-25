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
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
//       <Place>{rejs.miejsce}</Place>
//       <HighlightedHeading>{rejs.tytul}</HighlightedHeading>
//     </OfferTitle>
//     <Gallery>
//       <Carousel {...galleryOptions}>
//         {rejs.galeria.map((item) => (
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
//           <p>{rejs.typBudynku}</p>
//         </div>
//       </li>
//       <li>
//         <div>
//           <p>Koszt:</p>
//           <p>{rejs.koszt}</p>
//         </div>
//       </li>
//     </OfferDetailsList>
//     <ContactDetails contact={rejs.kontakt} />
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
