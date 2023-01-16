import produce from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'

export interface Coffee {
  id: string
  title: string
  tags: string[]
  amount: number
  description: string
  image: string
  price: number
}

export interface Item extends Coffee {
  quantity: number
}

interface CartContextType {
  items: Item[]
  quantity: number
  total: number
  onAdd: (coffee: Item) => void
  onChangeItem: (coffeeId: string, type: 'add' | 'remove') => void
  onRemove: (coffeeId: string) => void
  onClean: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_DELIVERY_STORAGE_KEY = '@coffeeDelivery'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<Item[]>(() => {
    const storedItems = localStorage.getItem(
      `${COFFEE_DELIVERY_STORAGE_KEY}:items`,
    )

    if (storedItems) {
      return JSON.parse(storedItems)
    }

    return []
  })

  const quantity = items.length

  const total = items.reduce((amount, coffee) => {
    return amount + coffee.price * coffee.quantity
  }, 0)

  function onAdd(coffee: Item) {
    const coffeeAlreadyExistsInCart = items.findIndex(
      (item) => item.id === coffee.id,
    )

    const newCart: Item[] = produce(items, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setItems(newCart)
  }

  function onRemove(coffeeId: string) {
    const newCart = produce(items, (draft) => {
      const coffeeExistsInCart = items.findIndex((item) => item.id === coffeeId)

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setItems(newCart)
  }

  function onChangeItem(coffeeId: string, type: 'add' | 'remove') {
    const newCart = produce(items, (draft) => {
      const coffeeExistsInCart = items.findIndex((item) => item.id === coffeeId)

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]

        draft[coffeeExistsInCart].quantity =
          type === 'add' ? item.quantity + 1 : (item.quantity = 1)
      }
    })

    setItems(newCart)
  }

  function onClean() {
    setItems([])
  }

  useEffect(() => {
    localStorage.setItem(
      `${COFFEE_DELIVERY_STORAGE_KEY}:items`,
      JSON.stringify(items),
    )
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        quantity,
        total,
        onAdd,
        onChangeItem,
        onRemove,
        onClean,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
