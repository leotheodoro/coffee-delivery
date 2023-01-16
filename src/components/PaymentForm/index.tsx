import { CreditCard, MapPinLine, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { NewOrderCheckoutForm } from '../../pages/OrderCheckout'

import {
  AddressFormContainer,
  FormTitle,
  InputContainer,
  PaymentFormContainer,
  PaymentTypeButton,
  PaymentTypeFormContainer,
} from './styles'

interface PaymentFormProps {
  paymentType: string
  onCompleteOrderCheckout: (data: NewOrderCheckoutForm) => void
  handleChangePaymentType: (type: string) => void
}

export const PaymentForm = ({
  paymentType,
  handleChangePaymentType,
  onCompleteOrderCheckout,
}: PaymentFormProps) => {
  const { register, handleSubmit } = useFormContext()

  const handleCompleteOrderCheckout = (data: any) => {
    onCompleteOrderCheckout(data)
  }

  return (
    <PaymentFormContainer>
      <h2>Complete seu pedido</h2>
      <AddressFormContainer
        onSubmit={handleSubmit(handleCompleteOrderCheckout)}
        id="orderCheckoutFormId"
      >
        <FormTitle>
          <MapPinLine />
          <div>
            <h4>Endereço de entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FormTitle>
        <input type="text" placeholder="CEP" {...register('zipCode')} />
        <input type="text" placeholder="Rua" {...register('street')} />
        <InputContainer>
          <input type="text" placeholder="Número" {...register('number')} />
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </InputContainer>
        <InputContainer>
          <input
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <input type="text" placeholder="Cidade" {...register('city')} />
          <input type="text" placeholder="UF" {...register('state')} />
        </InputContainer>
      </AddressFormContainer>
      <PaymentTypeFormContainer>
        <FormTitle>
          <div>
            <h4>Pagamento</h4>
            <span>
              O pagamento é feito na entrega. Escolha como deseja pagar
            </span>
          </div>
        </FormTitle>
        <div>
          <PaymentTypeButton
            selected={paymentType === 'creditCard'}
            onClick={() => handleChangePaymentType('creditCard')}
          >
            <CreditCard />
            Cartão de crédito
          </PaymentTypeButton>
          <PaymentTypeButton
            selected={paymentType === 'debitCard'}
            onClick={() => handleChangePaymentType('debitCard')}
          >
            <CreditCard />
            Cartão de débito
          </PaymentTypeButton>
          <PaymentTypeButton
            selected={paymentType === 'money'}
            onClick={() => handleChangePaymentType('money')}
          >
            <Money />
            Dinheiro
          </PaymentTypeButton>
        </div>
      </PaymentTypeFormContainer>
    </PaymentFormContainer>
  )
}
