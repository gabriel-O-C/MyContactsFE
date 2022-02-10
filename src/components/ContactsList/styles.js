import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  `;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

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

export const ListContainer = styled.div`
  margin-top: 24px;
    header{
      button{
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
    }
      span{
        margin-right: 8px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }

`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  & + & {
    margin-top: 16px;
  }
  .info{
    .contact-name{
      display: flex;
      align-items: center;
    }
    small{
      background: ${({ theme }) => theme.colors.primary.lighter};
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      text-transform: uppercase;
      margin-left: 8px;
      padding: 4px;
      border-radius: 4px;
    }
    span{
      display: block;
      color: ${({ theme }) => theme.colors.gray[200]};
      font-size: 1.4rem;
    }
  }
  .actions{
      display: flex;
      align-items: center;
        button{
          background: transparent;
          border: none;
          margin-left: 8px;
        }
    }
`;
