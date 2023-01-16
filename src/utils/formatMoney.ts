export const formatMoney = (price: number) => {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
