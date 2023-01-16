import { HalfCardCoffee } from '../HalfCardCoffee'
import {
  CartEmptyMessage,
  CartInfoContainer,
  CartInfoList,
  CoffeesList,
  CompleteOrderButton,
  PriceInfo,
  PriceTag,
} from './styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { formatMoney } from '../../utils/formatMoney'

export const CartInfo = () => {
  const { items: coffees, total } = useContext(CartContext)

  const formattedTotal = formatMoney(total)

  const isCartEmpty = coffees.length === 0
  const isButtonDisabled = isCartEmpty

  return (
    <CartInfoContainer>
      <h2>Cafés Selecionados</h2>
      <CartInfoList>
        {isCartEmpty ? (
          <CartEmptyMessage>
            <h2>Carrinho vazio!</h2>
            <a href="/">Clique aqui para ver nosso catálogo de cafés!</a>
          </CartEmptyMessage>
        ) : (
          <CoffeesList>
            {coffees.map((coffee) => (
              <HalfCardCoffee key={coffee.id} coffee={coffee} />
            ))}
          </CoffeesList>
        )}

        <PriceInfo>
          <PriceTag>
            <p>Total de Itens</p>
            <span>
              R$<span>{formattedTotal}</span>
            </span>
          </PriceTag>
          <PriceTag>
            <p>Entrega</p>
            <span>
              R$<span>{`0,00`}</span>
            </span>
          </PriceTag>
          <PriceTag>
            <h5>Total</h5>
            <h5>
              R$<span>{formattedTotal}</span>
            </h5>
          </PriceTag>
        </PriceInfo>
        <CompleteOrderButton
          disabled={isButtonDisabled}
          title={
            isButtonDisabled
              ? 'Adicione um café ao carrinho antes de completar o pedido'
              : 'Completar o pedido'
          }
          type="submit"
          form="orderCheckoutFormId"
        >
          Confirmar Pedido
        </CompleteOrderButton>
      </CartInfoList>
    </CartInfoContainer>
  )
}
