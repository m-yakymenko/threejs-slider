import styled from "styled-components";

export const Button = styled.button`
  padding: 9px 25px;
  font-weight: 600;
  border-radius: 15px;
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.primary.bgColorBright} 0%, ${theme.primary.bgColor} 100%)`};
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.primary.text};
  cursor: pointer;
  font-family: ${({ theme }) => theme.primary.fontFamily};

  &:hover {
    opacity: 0.8;
  }
`;
