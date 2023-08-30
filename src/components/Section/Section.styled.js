import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 40px 20px;

  background-color: var(--white-color);
  box-shadow: var(--box-shadow);

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 28px;

  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.96px;
  text-transform: uppercase;
  text-align: center;
`;
