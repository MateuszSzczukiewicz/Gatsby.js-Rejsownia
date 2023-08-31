import styled from 'styled-components';
import React from 'react';
interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px;

  button {
    cursor: pointer;
    margin: 10px 0;
  }

  label {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 500;
    margin: 15px 5px 0;
  }

  input,
  textarea {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    margin: 5px 0;
    resize: none;
    padding: 5px;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 400px;
    margin: 0 auto 100px;

    h2 {
      width: 300px;
      margin: 30px auto;
    }
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  border: 1px solid ${({ theme }) => theme.color.darkBlue};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.size.button};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 10px 15px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  margin: 8px 15px;
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
`;
