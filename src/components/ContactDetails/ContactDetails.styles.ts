import styled from 'styled-components';
import { Link } from 'gatsby';

export const ContactDetailsWrapper = styled(Link)`
  display: flex;
  margin-bottom: 50px;
  text-decoration: none;
  width: max-content;

  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 50px;
    object-fit: cover;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.color.black};
  }

  p:first-child {
    font-weight: bold;
  }
`;
