import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0;
`;

export const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

export const Wrapper = styled.div``;
