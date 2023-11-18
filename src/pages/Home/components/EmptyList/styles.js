import styled from 'styled-components';

export const Container = styled.div`
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
