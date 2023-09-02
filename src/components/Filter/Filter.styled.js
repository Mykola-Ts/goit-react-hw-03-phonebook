import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;

  margin-bottom: 28px;
`;

export const FilterInput = styled.input`
  display: block;

  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--text-black-color);
  padding: 8px 16px;
  margin-top: 8px;

  outline: 2px solid transparent;

  &:focus {
    border-color: transparent;
    outline-color: var(--blue-color);
  }
`;
