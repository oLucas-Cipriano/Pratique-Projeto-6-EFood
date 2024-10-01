import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import ProductDisplay from '../ProductDisplay'

import close from '../../assets/images/fechar.png'
import { open, add } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styles'

type Props = {
  restaurants: Restaurant[]
}

interface ModalState {
  isVisible: boolean
  url: string
  name: string
  description: string
  portion: string
  price: number
  id: number
}

const ProductDisplayList = ({ restaurants }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: '',
    name: '',
    description: '',
    portion: '',
    price: 0,
    id: 0
  })

  const closeModal = () =>
    setModal({
      isVisible: false,
      url: '',
      name: '',
      description: '',
      portion: '',
      price: 0,
      id: 0
    })

  const dispatch = useDispatch()

  const addToCart = () => {
    const item: MenuItem = {
      photo: modal.url,
      price: modal.price,
      id: modal.id,
      name: modal.name
    }

    dispatch(open())
    dispatch(add(item))
  }

  const { id } = useParams()

  function extractMenuById(id: number) {
    const restaurant = restaurants.find((r) => r.id === id)
    return restaurant ? restaurant.cardapio : null
  }

  const menu = extractMenuById(Number(id))

  return (
    <S.ListContainer>
      <S.List>
        {menu ? (
          menu.map((item) => (
            <li
              key={item.id}
              onClick={() =>
                setModal({
                  isVisible: true,
                  url: item.foto,
                  name: item.nome,
                  description: item.descricao,
                  portion: item.porcao,
                  price: item.preco,
                  id: item.id
                })
              }
            >
              <ProductDisplay
                description={item.descricao}
                image={item.foto}
                title={item.nome}
              ></ProductDisplay>
            </li>
          ))
        ) : (
          <p>Cardápio não disponível</p>
        )}
      </S.List>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <div onClick={closeModal} className="overlay"></div>
        <S.ModalContent className="container">
          <S.Close src={close} alt="fechar" onClick={closeModal} />

          <S.MenuItemImage src={modal.url} alt="" />

          <S.Informations>
            <h4>{modal.name}</h4>
            <p>
              {modal.description} <br />
              <br />
              Serve: de {modal.portion}
            </p>
            <S.Button
              onClick={() => {
                closeModal()
                addToCart()
              }}
            >{`Adicionar ao carrinho - ${parseToBrl(modal.price)}`}</S.Button>
          </S.Informations>
        </S.ModalContent>
      </S.Modal>
    </S.ListContainer>
  )
}

export default ProductDisplayList
