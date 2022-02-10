import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

    strong{
      color: #222;
      font-size: 2.4rem;
    }
    a{
      color: ${({ theme }) => theme.colors.primary.main};
      text-decoration: none;
      font-weight: bold;
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
      padding: 8px 16px;
      border-radius: 4px;
      transition: all .3s ease-in;

        &:hover{
          background: ${({ theme }) => theme.colors.primary.main};
          color: #fff;
        }
  }
`;