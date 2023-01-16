import { useContext, useState } from 'react'
import { CartInfo } from '../../components/CartInfo'
import { PaymentForm } from '../../components/PaymentForm'
import { OrderCheckoutContainer } from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { v4 as uuidv4 } from 'uuid'
import * as zod from 'zod'

import { toast } from 'react-toastify'
import { CartContext } from '../../contexts/CartContext'

const newOrderCheckoutFormSchema = zod.object({
  zipCode: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/),
  street: zod.string().min(5),
  number: zod.string().min(1).max(3),
  complement: zod.string().min(3),
  neighborhood: zod.string().min(5),
  city: zod.string(),
  state: zod.string(),
})

export type NewOrderCheckoutForm = zod.infer<typeof newOrderCheckoutFormSchema>

export const OrderCheckout = () => {
  const { onNewOrder } = useContext(CartContext)

  const [paymentType, setPaymentType] = useState('')

  function handleChangePaymentType(paymentTypeValue: string) {
    setPaymentType(paymentTypeValue)
  }

  const newOrderCheckoutForm = useForm<NewOrderCheckoutForm>({
    resolver: zodResolver(newOrderCheckoutFormSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const { reset } = newOrderCheckoutForm

  const onCompleteOrderCheckout = ({
    city,
    complement,
    neighborhood,
    number,
    state,
    street,
    zipCode,
  }: NewOrderCheckoutForm) => {
    console.log(' oi')
    const newOrderCheckoutData = {
      city,
      complement,
      neighborhood,
      number,
      state,
      street,
      zipCode,
      paymentType,
      date: format(new Date(), 'dd/MM/yyyy hh:mm', { locale: ptBR }),
      id: uuidv4(),
    }

    if (paymentType.length === 0) {
      toast.warning('Selecione um meio de pagamento')
      return
    }

    onNewOrder(newOrderCheckoutData)
    window.location.href = '/order-confirmed'
    reset()
  }

  return (
    <OrderCheckoutContainer>
      <FormProvider {...newOrderCheckoutForm}>
        <PaymentForm
          paymentType={paymentType}
          onCompleteOrderCheckout={onCompleteOrderCheckout}
          handleChangePaymentType={handleChangePaymentType}
        />
        <CartInfo />
      </FormProvider>
    </OrderCheckoutContainer>
  )
}
