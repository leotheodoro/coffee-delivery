import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { quantity } = useContext(CartContext)
  console.log(quantity)

  const isCartEmpty = quantity <= 0
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <div color="yellow">
          <MapPin size={22} weight="fill" />
          Bauru, SP
        </div>
        <NavLink to="/order-checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
          {!isCartEmpty && <span>{quantity}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
