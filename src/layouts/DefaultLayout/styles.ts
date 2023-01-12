import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: calc(100vh + 17.8rem);
  width: 90%;
  max-width: 112rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background};
  padding: 3rem 0;
`
