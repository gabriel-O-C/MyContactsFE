import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  `;

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

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

    .details{
      margin-left: 24px;

      strong{
        font-size: 22px;
        color: ${({ theme }) => theme.colors.danger.main};
        display: block;
        margin-bottom: 8px;
      }
    }
`;

export const EmptyListContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 16px;
 align-items: center;
 color: ${({ theme }) => theme.colors.gray[200]};
 text-align: center;

 img {
 margin-bottom: 8px;
}

 span {
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.main};
}
`;
export const SearchNotFoundContainer = styled.div`
 display: flex;
 align-items: flex-start;
 margin-top: 16px;

 span{
 margin-left: 24px;
 color: ${({ theme }) => theme.colors.gray[200]};
 word-break: break-word;
}
`;
