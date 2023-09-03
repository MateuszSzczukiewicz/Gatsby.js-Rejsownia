import styled from 'styled-components';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px;

  div {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    margin: 10px 0 0;
  }

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

export const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.darkBlue};
  background-color: transparent;
  position: relative;
  font-size: ${({ theme }) => theme.font.size.button};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 10px 15px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin: 8px 15px;
  color: ${({ theme }) => theme.color.black};
  overflow: hidden;
  transition: color 0.4s cubic-bezier(0.61, 0.07, 0.23, 0.89);

  &::after {
    position: absolute;
    content: '';
    width: 500px;
    height: 500px;
    background-color: ${({ theme }) => theme.color.darkBlue};
    transform: translate(-49%, -49%) scale(0);
    border-radius: 300px;
    transform-origin: 43%;
    transition: transform 0.4s cubic-bezier(0.61, 0.07, 0.23, 0.89);
    z-index: -1;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover {
    color: white;
  }
`;
