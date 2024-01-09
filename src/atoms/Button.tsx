import styled from "styled-components";

export const Button = styled.button`
  padding: 9px 25px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.primary.fontFamily};
  font-size: 1em;
  border-radius: 15px;
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.primary.bgColorBright} 0%, ${theme.primary.bgColor} 100%)`};
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.primary.textBtn};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 800px) {
    padding: 5px 15px;
  }
`;
