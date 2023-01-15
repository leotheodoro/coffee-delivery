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

import coffees from '../../assets/coffees-object/coffeesObject'

export const CartInfo = () => {
  const isCartEmpty = false
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
            <HalfCardCoffee coffee={coffees[0]} />
            <HalfCardCoffee coffee={coffees[1]} />
          </CoffeesList>
        )}

        <PriceInfo>
          <PriceTag>
            <p>Total de Itens</p>
            <span>
              R$<span>{`0,00`}</span>
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
              R$<span>{`0,00`}</span>
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
          form="completeOrderForm"
        >
          Confirmar Pedido
        </CompleteOrderButton>
      </CartInfoList>
    </CartInfoContainer>
  )
}
