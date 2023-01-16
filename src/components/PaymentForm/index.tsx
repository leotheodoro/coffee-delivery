import { Check, CreditCard, MapPinLine, Money, X } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { NewOrderCheckoutForm } from '../../pages/OrderCheckout'

import {
  AddressFormContainer,
  FieldValidation,
  FormTitle,
  InputContainer,
  PaymentFormContainer,
  PaymentTypeButton,
  PaymentTypeFormContainer,
  Validation,
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
  const { register, watch, handleSubmit } = useFormContext()

  const handleCompleteOrderCheckout = (data: any) => {
    onCompleteOrderCheckout(data)
  }

  const zipCode = watch('zipCode')
  const street = watch('street')
  const neighborhood = watch('neighborhood')
  const complement = watch('complement')
  const number = watch('number')

  const isCepValid = /^[0-9]{5}-[0-9]{3}$/.test(zipCode)
  const isStreetValid = street.length > 5
  const isNeighborhoodValid = neighborhood.length > 5
  const isComplementValid = complement.length > 3
  const isNumberValid = parseInt(number) > 0 && parseInt(number) <= 999

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
        <Validation>
          <FieldValidation valid={isStreetValid}>
            Rua com + de 5 caracteres {FieldValidationIcon(isStreetValid)}
          </FieldValidation>
          <FieldValidation valid={isNumberValid}>
            Número entre 1 e 999 {FieldValidationIcon(isNumberValid)}
          </FieldValidation>
          <FieldValidation valid={isNeighborhoodValid}>
            Bairro com + de 5 caracteres{' '}
            {FieldValidationIcon(isNeighborhoodValid)}
          </FieldValidation>
          <FieldValidation valid={isCepValid}>
            CEP no formato: 0000-000 {FieldValidationIcon(isCepValid)}
          </FieldValidation>
          <FieldValidation valid={isComplementValid}>
            Complemento com + de 3 caracteres{' '}
            {FieldValidationIcon(isComplementValid)}
          </FieldValidation>
        </Validation>
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

const FieldValidationIcon = (validation: boolean) => {
  if (validation) {
    return <Check />
  }
  return <X />
}
