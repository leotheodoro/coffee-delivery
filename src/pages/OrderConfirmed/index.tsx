import { Clock, MapPin, Money } from 'phosphor-react'
import {
  OrderConfirmedContainer,
  OrderConfirmedInfo,
  OrderConfirmedInfoTag,
} from './styles'

import OrderConfirmedBackgroundImg from '../../assets/order-confirmed-background.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { readablePaymentType } from '../../utils/readablePaymentType'

export function OrderConfirmed() {
  const { order } = useContext(CartContext)

  return (
    <OrderConfirmedContainer>
      {order && (
        <>
          <OrderConfirmedInfo>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você!</p>
            <div>
              <OrderConfirmedInfoTag>
                <MapPin weight="fill" />
                <div>
                  <p>
                    Entrega em <span>{order.street}</span>
                  </p>
                  <p>
                    {order.neighborhood}, {order.city}, {order.state}
                  </p>
                </div>
              </OrderConfirmedInfoTag>
              <OrderConfirmedInfoTag>
                <Clock weight="fill" />
                <div>
                  <p>Previsão de entrega</p>
                  <span>20 min - 30 min</span>
                </div>
              </OrderConfirmedInfoTag>
              <OrderConfirmedInfoTag>
                <Money weight="fill" />
                <div>
                  <p>Pagamento na entrega</p>
                  <span>{readablePaymentType(order.paymentType)}</span>
                </div>
              </OrderConfirmedInfoTag>
            </div>
          </OrderConfirmedInfo>
          <img src={OrderConfirmedBackgroundImg} alt="" />
        </>
      )}
    </OrderConfirmedContainer>
  )
}
