import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    div,
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 8px;
      border-radius: 6px;
      font-size: 14px;
    }

    a {
      color: ${(props) => props.theme.colors['yellow-dark']};
      background: ${(props) => props.theme.colors['yellow-light']};
    }

    div {
      color: ${(props) => props.theme.colors['purple-dark']};
      background: ${(props) => props.theme.colors['purple-light']};

      svg {
        margin-right: 4px;
      }
    }
  }
`
