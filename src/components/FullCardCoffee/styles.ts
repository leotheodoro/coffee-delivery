import styled from 'styled-components'

export const FullCardCoffeeContainer = styled.div`
  height: 31rem;
  width: 25.6rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 5px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    margin-top: -4.5rem;
    width: 12rem;
    margin-bottom: 0.5rem;
  }
`

export const FullCardCoffeeTags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fonts.sizes.small};

  & span {
    padding: 5px 10px;
    color: ${(props) => props.theme.colors['yellow-dark']};
    background-color: ${(props) => props.theme.colors['yellow-light']};
    border-radius: 15px;
    font-weight: bold;
    margin: 0.5rem;
  }
`

export const FullCardCoffeeInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px 0;

  & h6 {
    margin-bottom: 0.7rem;
    font-size: ${(props) => props.theme.fonts.sizes.medium2};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  & p {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: ${(props) => props.theme.fonts.sizes.small3};
  }
`

export const FullCardCoffeePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  & p {
    font-size: ${(props) => props.theme.fonts.sizes.small3};
    margin-right: 2rem;
  }

  & p span {
    color: ${(props) => props.theme.colors['base-title']};
    font-family: ${(props) => props.theme.fonts.family.baloo};
    font-weight: bold;
    font-size: ${(props) => props.theme.fonts.sizes.big};
  }

  & > button {
    background-color: ${(props) => props.theme.colors['purple-dark']};
    border: none;
    border-radius: 5px;
    margin-left: 0.8rem;
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s;

    &:hover:not(:disabled) {
      background-color: ${(props) => props.theme.colors.purple};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  & > button svg {
    border-radius: 5px;
    color: white;
    font-size: 2rem;
  }
`
