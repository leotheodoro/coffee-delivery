import { Trash } from 'phosphor-react'
import { CoffeeAmount } from '../CoffeeAmount'
import { Coffee } from '../FullCardCoffee'
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
  return (
    <HalfCardCoffeeContainer>
      <img src={coffee.image} alt="" />
      <div>
        <HalfCardCoffeeInfo>
          <h6>{coffee.title}</h6>
          <p>{`R$ ${coffee.price}`}</p>
        </HalfCardCoffeeInfo>
        <HalfCardCoffeeSale>
          <CoffeeAmount />
          <RemoveCoffeeButton>
            <Trash />
            <span>REMOVER</span>
          </RemoveCoffeeButton>
        </HalfCardCoffeeSale>
      </div>
    </HalfCardCoffeeContainer>
  )
}
