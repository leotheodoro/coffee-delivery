import styled from 'styled-components'

export const OrderCheckoutContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 4rem;

  @media (max-width: 1223px) {
    justify-content: center;
  }
`
