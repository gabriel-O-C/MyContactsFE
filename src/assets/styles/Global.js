import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray[900]};
  }
  button{
    cursor: pointer;
  }
`;
