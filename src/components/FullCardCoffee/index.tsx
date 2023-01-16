import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext, Coffee } from '../../contexts/CartContext'
import { CoffeeAmount } from '../CoffeeAmount'
import {
  FullCardCoffeeContainer,
  FullCardCoffeeInfo,
  FullCardCoffeePrice,
  FullCardCoffeeTags,
} from './styles'

interface FullCardCoffeeProps {
  coffee: Coffee
}

export const FullCardCoffee = ({ coffee }: FullCardCoffeeProps) => {
  const { onAdd, onRemove, items: coffees } = useContext(CartContext)

  const coffeeAlreadyExistsInCart = coffees.findIndex(
    (coffeeItem) => coffeeItem.id === coffee.id,
  )

  const [quantity, setQuantity] = useState(
    coffeeAlreadyExistsInCart >= 0
      ? coffees[coffeeAlreadyExistsInCart].quantity
      : 0,
  )

  function handleAdd() {
    setQuantity((oldQuantity) => oldQuantity + 1)
  }

  function handleRemove() {
    if (quantity === 0) return

    setQuantity((oldQuantity) => oldQuantity - 1)
  }

  function handleAddToCart() {
    if (quantity === 0) {
      return onRemove(coffee.id)
    }

    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    onAdd(coffeeToAdd)
  }

  return (
    <FullCardCoffeeContainer>
      <img src={coffee.image} alt={coffee.title} />
      <FullCardCoffeeTags>
        {coffee.tags && coffee.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </FullCardCoffeeTags>
      <FullCardCoffeeInfo>
        <h6>{coffee.title}</h6>
        <p>{coffee.description}</p>
      </FullCardCoffeeInfo>
      <FullCardCoffeePrice>
        <p>
          R$ <span>{coffee.price}</span>
        </p>
        <CoffeeAmount
          quantity={quantity}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
        <button onClick={handleAddToCart}>
          <ShoppingCart />
        </button>
      </FullCardCoffeePrice>
    </FullCardCoffeeContainer>
  )
}
