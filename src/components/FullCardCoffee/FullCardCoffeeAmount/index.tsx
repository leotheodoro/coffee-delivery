import { Minus, Plus } from 'phosphor-react'
import { FullCardCoffeeAmountContainer } from './styles'

export const FullCardCoffeeAmount = () => {
  function handleAddOne() {}

  function handleRemoveOne() {}

  return (
    <FullCardCoffeeAmountContainer>
      <button onClick={handleRemoveOne} title="Remover um">
        <Plus />
      </button>
      <span>0</span>
      <button onClick={handleAddOne} title="Adicionar um">
        <Minus />
      </button>
    </FullCardCoffeeAmountContainer>
  )
}
