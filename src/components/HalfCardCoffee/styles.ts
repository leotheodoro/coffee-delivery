import styled from 'styled-components'

export const HalfCardCoffeeContainer = styled.div`
  height: 8rem;
  width: 36.8rem;
  padding: 0 0.8rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 4rem;
  margin-top: 1rem;

  img {
    width: 6.4rem;
  }

  > div {
    height: 6.4rem;
    width: 27.5rem;
    margin-left: 2rem;
  }
`

export const HalfCardCoffeeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3.2rem;

  h6 {
    font-weight: normal;
    font-size: ${(props) => props.theme.fonts.sizes.small4};
    font-family: ${(props) => props.theme.fonts.family.roboto};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    color: ${(props) => props.theme.colors['base-hover']};
    font-size: ${(props) => props.theme.fonts.sizes.small4};
    font-weight: bold;
  }
`

export const HalfCardCoffeeSale = styled.div`
  display: flex;
  flex-direction: row;
  height: 3.2rem;
`

export const RemoveCoffeeButton = styled.button`
  width: 9.1rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 5px;
  margin-left: 1rem;
  border: none;
  transition: 0.25s;

  :hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }

  & span {
    font-size: ${(props) => props.theme.fonts.sizes.small2};
    margin-bottom: 0.8rem;
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    margin-right: 0.2rem;
  }
`
