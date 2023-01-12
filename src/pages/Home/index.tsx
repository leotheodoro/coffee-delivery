import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import homeCoffeeDeliveryImg from '../../assets/home-coffee-delivery.svg'
import {
  HomeAdvantages,
  HomeCoffeeSection,
  HomeContainer,
  HomeInfo,
  HomeSection,
} from './styles'

import coffeesObject from '../../assets/coffees-object/coffeesObject'
import { FullCardCoffee } from '../../components/FullCardCoffee'

export function Home() {
  return (
    <HomeContainer>
      <HomeSection>
        <HomeInfo>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora do dia
            </p>
          </div>
          <HomeAdvantages>
            <div>
              <ShoppingCart size="2.8rem" weight="fill" />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package size="2.8rem" weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer size="2.8rem" weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee size="2.8rem" weight="fill" />
              <span>O café chega fresquinho até você</span>
            </div>
          </HomeAdvantages>
        </HomeInfo>
        <img src={homeCoffeeDeliveryImg} alt="" />
      </HomeSection>
      <HomeCoffeeSection>
        <h3>Nossos cafés</h3>
        <div>
          {coffeesObject.map((coffee) => (
            <FullCardCoffee coffee={coffee} key={coffee.id} />
          ))}
        </div>
      </HomeCoffeeSection>
    </HomeContainer>
  )
}
