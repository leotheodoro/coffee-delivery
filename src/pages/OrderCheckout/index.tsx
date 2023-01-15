import { CartInfo } from '../../components/CartInfo'
import { PaymentForm } from '../../components/PaymentForm'
import { OrderCheckoutContainer } from './styles'

export const OrderCheckout = () => {
  return (
    <OrderCheckoutContainer>
      <PaymentForm />
      <CartInfo />
    </OrderCheckoutContainer>
  )
}
