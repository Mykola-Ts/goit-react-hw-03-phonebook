import styled from 'styled-components';

export const ContactLabel = styled.label`
  position: relative;

  display: block;

  margin-bottom: 28px;

  font-weight: 700;
`;

export const ContactInput = styled.input`
  display: block;

  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--text-black-color);
  padding: 8px 16px;
  margin-top: 8px;

  outline: 1px solid transparent;

  transition: border-color var(--transition-duration)
      var(--transition-timing-function),
    outline-color var(--transition-duration) var(--transition-timing-function);

  &:focus {
    border-color: transparent;
    outline-color: var(--blue-color);
  }
`;

export const SubmitButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;

min-width: 140px;
border-radius: 18px;
border: 2px solid var(--blue-color);
padding: 8px 16px;
margin: 0 auto;

color: var(--blue-color);
background-color: transparent;

transition: color var(--transition-duration)
var(--transition-timing-function), background-color var(--transition-duration)
var(--transition-timing-function);

&:is(:hover, :focus, :active) {
color: var(--white-color);
background-color: var(--blue-color);
`;
