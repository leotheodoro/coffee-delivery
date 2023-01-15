import styled from 'styled-components'

export const CartInfoContainer = styled.div`
  width: 44.8rem;

  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fonts.sizes.medium};
    margin: 1rem;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const CartInfoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 49.8rem;
  padding-bottom: 3rem;
  width: 100%;
  border-radius: 4px 30px;
  background-color: ${(props) => props.theme.colors['base-card']};
`

export const CartEmptyMessage = styled.div`
  max-width: 36.8rem;
  width: 80%;
  height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.25s;
  border: double 1px transparent;
  border-image-slice: 1;
  border-radius: 10px;
  text-align: center;
  background-image: linear-gradient(
      ${(props) => props.theme.colors['base-card']},
      ${(props) => props.theme.colors['base-card']}
    ),
    radial-gradient(
      circle at top left,
      ${(props) => props.theme.colors['yellow-dark']},
      ${(props) => props.theme.colors['purple-dark']}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  h2 {
    font-weight: normal;
    font-family: ${(props) => props.theme.fonts.family.roboto};
    color: ${(props) => props.theme.colors['base-text']};
  }

  a {
    color: ${(props) => props.theme.colors.purple};
    text-decoration: none;
    font-size: ${(props) => props.theme.fonts.sizes.small3};
    width: 90%;

    :hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`

export const CoffeesList = styled.div`
  min-height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 4rem;
  }
`

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;
  height: 9.2rem;
  max-width: 36.8rem;
  width: 100%;
`

export const PriceTag = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fonts.sizes.small3};
  }

  span {
    font-size: ${(props) => props.theme.fonts.sizes.small4};
  }

  h5,
  h5 > span {
    color: ${(props) => props.theme.colors['base-text']};
    font-family: ${(props) => props.theme.fonts.family.roboto};
    font-size: ${(props) => props.theme.fonts.sizes.medium2};
  }
`

export const CompleteOrderButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  max-width: 36.8rem;
  width: 80%;
  height: 4.6rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.yellow};
  transition: 0.25s;

  :hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
  }

  :disabled {
    cursor: not-allowed;
  }
`
