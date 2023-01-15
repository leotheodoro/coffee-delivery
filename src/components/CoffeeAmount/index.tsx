import { Minus, Plus } from 'phosphor-react'
import { CoffeeAmountContainer } from './styles'

export const CoffeeAmount = () => {
  function handleAddOne() {}

  function handleRemoveOne() {}

  return (
    <CoffeeAmountContainer>
      <button onClick={handleRemoveOne} title="Remover um">
        <Plus />
      </button>
      <span>0</span>
      <button onClick={handleAddOne} title="Adicionar um">
        <Minus />
      </button>
    </CoffeeAmountContainer>
  )
}
