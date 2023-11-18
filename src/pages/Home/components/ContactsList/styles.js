import styled from 'styled-components';

export const ListHeader = styled.header`
  margin-top: 24px;

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
      img{
        transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
        transition: transform .2s ease-in;
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
