import styled, { css } from 'styled-components'
import { ThemeType } from '../../@types/styled'

export const PaymentFormContainer = styled.div`
  width: 64rem;

  & h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fonts.sizes.medium};
    margin: 1rem;
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  & input:not(:first-child) {
    margin-left: 1rem;
  }

  & input:first-child {
    width: 25%;
  }

  & input:nth-child(2) {
    width: 75%;
  }

  & input:nth-child(3) {
    width: 20%;
  }
`

export const FormTitle = styled.div`
  min-height: 4.4rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 2rem;

  & h4 {
    font-family: ${(props) => props.theme.fonts.family.roboto};
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fonts.sizes.small4};
    margin-bottom: 0.5rem;
  }

  & span {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fonts.sizes.small3};
  }

  & svg {
    font-size: 2rem;
    margin-right: 1rem;
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const AddressFormContainer = styled.form`
  width: 100%;
  padding: 3rem;
  min-height: 37.2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors['base-card']};
  display: flex;
  flex-direction: column;

  & input {
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: ${(props) => props.theme.fonts.sizes.small3};
    color: ${(props) => props.theme.colors['base-title']};
    background-color: ${(props) => props.theme.colors['base-input']};
    border: 1px solid ${(props) => props.theme.colors['base-button']};

    &:focus {
      border-color: ${(props) => props.theme.colors['yellow-dark']};
    }

    &:disabled:hover {
      cursor: not-allowed;
    }
  }
`

export const PaymentTypeFormContainer = styled.div`
  width: 100%;
  padding: 3rem;
  min-height: 20.7rem;
  border-radius: 5px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colors['base-card']};

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
`

type PaymentButtonProps = {
  selected: boolean
  theme: ThemeType
}

export const PaymentTypeButton = styled.button<PaymentButtonProps>`
  height: 5.1rem;
  margin: 5px;
  min-width: 18rem;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  text-transform: uppercase;
  transition: 0.25s;

  & svg {
    color: ${(props) => props.theme.colors.purple};
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.white};

    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }

  ${(props) =>
    css`
      border: ${props.selected ? '1px solid' : 'none'};
      border-color: ${props.selected && props.theme.colors.purple};
      background-color: ${props.selected && props.theme.colors.purple};

      color: ${props.selected && props.theme.colors.white};

      svg {
        color: ${props.selected && props.theme.colors.white};
      }
    `}
`
