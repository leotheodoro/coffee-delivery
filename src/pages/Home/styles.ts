import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const HomeSection = styled.section`
  width: 100%;
  min-height: 54.4rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & img {
    width: 47.6rem;
  }

  @media (max-width: 1215px) {
    justify-content: center;

    & img {
      width: 90%;
    }
  }
`

export const HomeInfo = styled.div`
  min-height: 36rem;
  width: 100%;
  max-width: 60rem;

  & > div:first-child {
    display: flex;
    width: 100%;
    flex-direction: column;

    & h1 {
      color: ${(props) => props.theme.colors['base-title']};
      font-size: ${(props) => props.theme.fonts.sizes.xxhuge};
      width: 100%;
      line-height: 130%;

      @media (max-width: 600px) {
        font-size: ${(props) => props.theme.fonts.sizes.xhuge};
      }
    }

    & p {
      margin-top: 2rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-size: ${(props) => props.theme.fonts.sizes.medium2};
    }
  }

  @media (max-width: 1215px) {
    width: 80%;
    text-align: center;
  }
`

export const HomeAdvantages = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 40px;

  & div {
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    min-width: 290px;

    & span {
      font-size: ${({ theme }) => theme.fonts.sizes.small4};
      color: ${({ theme }) => theme.colors['base-text']};
      margin-left: 1rem;
    }

    & svg {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      border-radius: 50%;
      font-size: 2.8rem;
      padding: 0.5rem;
    }
  }

  & div:nth-child(2) svg {
    background-color: ${({ theme }) => theme.colors['base-text']};
  }

  & div:nth-child(3) svg {
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  & div:nth-child(4) svg {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`
