import {
  CartContainer,
  CartItem,
  ImagemDoItemDoCardapio,
  Infos,
  Lixeira,
  Overlay,
  SideBar
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import lixeira from '../../assets/images/lixeira-de-reciclagem 2.svg'
import { formataPreco } from '../ProdutoList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, itemAtual) => {
      return (acumulador += itemAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <ImagemDoItemDoCardapio src={item.foto} alt={item.nome} />
              <Infos>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </Infos>

              <Lixeira
                onClick={() => removeItem(item.id)}
                src={lixeira}
                alt="remover"
              />
            </CartItem>
          ))}
        </ul>
        <div>
          <p>Valor total </p>
          <span>{formataPreco(getTotalPrice())}</span>
        </div>
        <button type="button" title="Clique aqui para continuar com a compra">
          Continuar com a entrega
        </button>
      </SideBar>
    </CartContainer>
  )
}
export default Cart
