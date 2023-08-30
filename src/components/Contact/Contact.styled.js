import styled from 'styled-components';

export const ContactInfo = styled.p`
  margin-right: 12px;

  font-weight: 700;
`;

export const ContactNumber = styled.span`
  margin-right: auto;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 18px;
  border: 1px solid var(--text-black-color);
  padding: 8px 12px;

  color: currentColor;
  background-color: transparent;

  transition: color var(--transition-duration)
  var(--transition-timing-function), border-color var(--transition-duration)
  var(--transition-timing-function);

&:is(:hover, :focus, :active) {
  color: var(--red-color);
  border-color: var(--red-color);
`;
