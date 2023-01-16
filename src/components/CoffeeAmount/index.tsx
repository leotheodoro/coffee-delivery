import { Minus, Plus } from 'phosphor-react'
import { CoffeeAmountContainer } from './styles'

interface CoffeeAmountProps {
  quantity: number
  handleAdd: () => void
  handleRemove: () => void
}

export const CoffeeAmount = ({
  quantity,
  handleAdd,
  handleRemove,
}: CoffeeAmountProps) => {
  return (
    <CoffeeAmountContainer>
      <button onClick={handleAdd} title="Remover um">
        <Plus />
      </button>
      <span>{quantity}</span>
      <button onClick={handleRemove} title="Adicionar um">
        <Minus />
      </button>
    </CoffeeAmountContainer>
  )
}
