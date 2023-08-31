import styled from 'styled-components';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { ContactFormWrapper } from 'components/ContactForm/ContactForm.styles';

interface ContactPhotoProps {
  imageSource: string;
}

export const ContactInfoWrapper = styled.section`
  a {
    color: ${({ theme }) => theme.color.black};
    display: flex;
    align-items: center;
    margin: 5px 0 10px -7px;
  }
`;

export const ContactPhoto = styled.div<ContactPhotoProps>`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: initial;
    position: relative;
    background-image: url('${({ imageSource }) => imageSource}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 80%;
  }
`;

export const ContactContentWrapper = styled(ContentWrapper)`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 100px;

    ${ContactFormWrapper} {
      width: 100% !important;
      margin: 0 !important;
    }

    ${ContactFormWrapper}, ${ContactInfoWrapper} {
      grid-column: 1 / 2;
    }

    ${ContactPhoto} {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
  }
`;
