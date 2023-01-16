export const readablePaymentType = (type: string) => {
  switch (type) {
    case 'money':
      return 'Dinheiro'

    case 'creditCard':
      return 'Cartão de Crédito'

    case 'debitCard':
      return 'Cartão de Débito'
  }
}
