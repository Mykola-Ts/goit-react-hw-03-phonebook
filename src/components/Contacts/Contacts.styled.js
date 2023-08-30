import styled from 'styled-components';

export const ListItem = styled.li`
  transform: scale(1, 1);

  display: flex;
  align-items: center;

  border-radius: 8px;
  border: 2px solid rgb(228 228 228);
  padding: 16px 20px;

  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  transition: transform var(--transition-duration)
    var(--transition-timing-function);

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:is(:hover) {
    transform: scale(1.02, 1.1);
  }
`;
