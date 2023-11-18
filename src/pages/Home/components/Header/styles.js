import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-bottom: 8px;
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

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
