import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  border: 2px solid #fff;
  outline: none;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.3s ease-in;

  &:focus{
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
