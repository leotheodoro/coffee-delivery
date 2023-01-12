import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import homeCoffeeDeliveryImg from '../../assets/home-coffee-delivery.svg'
import { HomeAdvantages, HomeContainer, HomeInfo, HomeSection } from './styles'

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
    </HomeContainer>
  )
}
