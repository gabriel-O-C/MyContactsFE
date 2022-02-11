import styled from 'styled-components';

export default styled.button`
  height: 52px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  transition: background .2s ease-in;

  &:hover{
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active{
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled]{
    background: #ccc;
    cursor: default;
  }
`;
