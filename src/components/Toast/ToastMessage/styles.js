import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 16px 32px;

  & + & {
    margin-top: 12px;
  }

  strong {
    margin-left: 8px;
  }
`;
