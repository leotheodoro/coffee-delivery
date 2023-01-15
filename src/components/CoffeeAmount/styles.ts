import styled from 'styled-components'

export const CoffeeAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  width: 7rem;
  height: 3.2rem;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors['base-button']};

  & span {
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.fonts.sizes.small4};
  }

  & button {
    color: ${(props) => props.theme.colors.purple};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    width: 3rem;
    height: 3.2rem;
    transition: 0.25s;

    & svg {
      font-size: 1.5rem;
    }

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`
