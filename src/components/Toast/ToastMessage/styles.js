import styled, { css } from 'styled-components';

const containerVariants = {

  default: css`background: ${({ theme }) => theme.colors.primary.main};`,

  success: css`background: ${({ theme }) => theme.colors.success.main};`,

  danger: css` background: ${({ theme }) => theme.colors.danger.main};`,
};

export const Container = styled.div`
  align-items: center;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 16px 32px;

  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 12px;
  }

  strong {
    margin-left: 8px;
  }
`;
