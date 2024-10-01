import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { open } from '../../store/reducers/checkout'
import { getTotalPrice, parseToBrl } from '../../utils'

import trash from '../../assets/images/lixeira-de-reciclagem 2.svg'

import * as S from './styles'
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    closeCart()
    dispatch(open())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <S.MenuItemImage src={item.photo} alt={item.name} />
                  <S.Infos>
                    <h3>{item.name}</h3>
                    <p>{parseToBrl(item.price)}</p>
                  </S.Infos>

                  <S.Trash
                    onClick={() => removeItem(item.id)}
                    src={trash}
                    alt="remover"
                  />
                </S.CartItem>
              ))}
            </ul>
            <div>
              <p>Valor total </p>
              <span>{parseToBrl(getTotalPrice(items))}</span>
            </div>
            <button
              onClick={goToCheckout}
              type="button"
              title="Clique aqui para continuar com a compra"
            >
              Continuar com a entrega
            </button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}
export default Cart
