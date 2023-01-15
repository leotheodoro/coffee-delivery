import { CreditCard, MapPinLine, Money } from 'phosphor-react'
import { useState } from 'react'
import {
  AddressFormContainer,
  FormTitle,
  InputContainer,
  PaymentFormContainer,
  PaymentTypeButton,
  PaymentTypeFormContainer,
} from './styles'

export const PaymentForm = () => {
  const [paymentType, setPaymentType] = useState('')

  function handleChangePaymentType(paymentTypeValue: string) {
    setPaymentType(paymentTypeValue)
  }

  return (
    <PaymentFormContainer>
      <h2>Complete seu pedido</h2>
      <AddressFormContainer>
        <FormTitle>
          <MapPinLine />
          <div>
            <h4>Endereço de entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FormTitle>
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Rua" />
        <InputContainer>
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
        </InputContainer>
        <InputContainer>
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
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
