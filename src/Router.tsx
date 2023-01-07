import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { OrderCheckout } from './pages/OrderCheckout'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order-checkout" element={<OrderCheckout />} />
      <Route path="/order-confirmed" element={<OrderConfirmed />} />
    </Routes>
  )
}
