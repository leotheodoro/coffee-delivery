import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext, Coffee } from '../../contexts/CartContext'
import { formatMoney } from '../../utils/formatMoney'
import { CoffeeAmount } from '../CoffeeAmount'
import {
  HalfCardCoffeeContainer,
  HalfCardCoffeeInfo,
  HalfCardCoffeeSale,
  RemoveCoffeeButton,
} from './styles'

interface HalfCoffeeCardProps {
  coffee: Coffee
}

export const HalfCardCoffee = ({ coffee }: HalfCoffeeCardProps) => {
  const { onChangeItem, onRemove } = useContext(CartContext)

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedCoffeeTotal = formatMoney(coffeeTotal)

  function handleAdd() {
    onChangeItem(coffee.id, 'add')
  }

  function handleRemove() {
    if (coffee.quantity === 0) {
      return onRemove(coffee.id)
    }
    onChangeItem(coffee.id, 'remove')
  }

  function handleDelete() {
    onRemove(coffee.id)
  }

  return (
    <HalfCardCoffeeContainer>
      <img src={coffee.image} alt="" />
      <div>
        <HalfCardCoffeeInfo>
          <h6>{coffee.title}</h6>
          <p>{`R$ ${formattedCoffeeTotal}`}</p>
        </HalfCardCoffeeInfo>
        <HalfCardCoffeeSale>
          <CoffeeAmount
            quantity={coffee.quantity}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
          <RemoveCoffeeButton onClick={handleDelete}>
            <Trash />
            <span>REMOVER</span>
          </RemoveCoffeeButton>
        </HalfCardCoffeeSale>
      </div>
    </HalfCardCoffeeContainer>
  )
}
