import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  width: 100%;
  min-height: calc(100% = 20.4rem);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;

  img {
    max-width: 49.2rem;
    width: 100%;
  }

  @media (max-width: 1550px) {
    justify-content: center;
    min-height: calc(100% - 35.4rem);
  }
`

export const OrderConfirmedInfo = styled.div`
  margin-bottom: 12rem;

  h2 {
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: ${(props) => props.theme.fonts.sizes.huge};
  }

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fonts.sizes.medium2};
  }

  > div {
    width: 100%;
    height: 27rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-top: 4rem;
    border: double 1px transparent;
    border-image-slice: 1;
    border-radius: 5px 30px;
    background-image: linear-gradient(
        ${(props) => props.theme.colors.background},
        ${(props) => props.theme.colors.background}
      ),
      radial-gradient(
        circle at top left,
        ${(props) => props.theme.colors['yellow-dark']},
        ${(props) => props.theme.colors['purple-dark']}
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  div:first-child svg {
    background-color: ${(props) => props.theme.colors.purple};
  }

  div:nth-child(2) svg {
    background-color: ${(props) => props.theme.colors.yellow};
  }

  button {
    margin-left: 3rem;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    width: 80%;
    height: 4.6rem;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.yellow};
    transition: 0.25s;

    :hover {
      background-color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }

  @media (max-width: 1550px) {
    margin: 0;
    height: max-content;
  }
`

export const OrderConfirmedInfoTag = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    height: 4.2rem;
    margin-left: 1rem;

    span {
      font-size: ${({ theme }) => theme.fonts.sizes.small4};
      color: ${({ theme }) => theme.colors['base-text']};
      font-weight: bold;
    }

    p {
      font-size: ${({ theme }) => theme.fonts.sizes.small4};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }

  svg {
    border-radius: 50%;
    padding: 0.8rem;
    font-size: 3rem;
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  path {
    color: ${({ theme }) => theme.colors.white};
  }
`
