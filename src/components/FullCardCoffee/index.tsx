import { ShoppingCart } from 'phosphor-react'
import { CoffeeAmount } from '../CoffeeAmount'
import {
  FullCardCoffeeContainer,
  FullCardCoffeeInfo,
  FullCardCoffeePrice,
  FullCardCoffeeTags,
} from './styles'

export interface Coffee {
  id: string
  title: string
  tags: string[]
  amount: number
  description: string
  image: string
  price: string
}

interface FullCardCoffeeProps {
  coffee: Coffee
}

export const FullCardCoffee = ({ coffee }: FullCardCoffeeProps) => {
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
        <CoffeeAmount />
        <button>
          <ShoppingCart />
        </button>
      </FullCardCoffeePrice>
    </FullCardCoffeeContainer>
  )
}
