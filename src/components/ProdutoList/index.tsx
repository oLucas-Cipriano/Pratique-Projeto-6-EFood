import { useParams } from 'react-router-dom'
import { Restaurante } from '../../pages/Home'
import Produto from '../Produto'
import {
  Fechar,
  ImagemDoItemDoCardapio,
  List,
  ListContainer,
  Modal,
  ModalContent,
  Botao,
  Informacoes
} from './styles'
import { useState } from 'react'

import close from '../../assets/images/fechar.png'
import { useDispatch } from 'react-redux'
import { open, add, ItemDoCardapio } from '../../store/reducers/cart'

type Props = {
  restaurantes: Restaurante[]
}

interface ModalState {
  isVisible: boolean
  url: string
  nome: string
  descricao: string
  porcao: string
  preco: number
  id: number
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProdutoList = ({ restaurantes }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0,
    id: 0
  })

  const closeModal = () =>
    setModal({
      isVisible: false,
      url: '',
      nome: '',
      descricao: '',
      porcao: '',
      preco: 0,
      id: 0
    })

  const dispatch = useDispatch()
  const addToCart = () => {
    const item: ItemDoCardapio = {
      foto: modal.url,
      preco: modal.preco,
      id: modal.id,
      nome: modal.nome
    }

    dispatch(open())
    dispatch(add(item))
  }

  const { id } = useParams()

  function extrairCardapioPorId(id: number) {
    const restaurante = restaurantes.find((r) => r.id === id)
    return restaurante ? restaurante.cardapio : null
  }

  const cardapio = extrairCardapioPorId(Number(id))

  return (
    <ListContainer>
      <List>
        {cardapio ? (
          cardapio.map((item) => (
            <li
              key={item.id}
              onClick={() =>
                setModal({
                  isVisible: true,
                  url: item.foto,
                  nome: item.nome,
                  descricao: item.descricao,
                  porcao: item.porcao,
                  preco: item.preco,
                  id: item.id
                })
              }
            >
              <Produto
                descricao={item.descricao}
                imagem={item.foto}
                titulo={item.nome}
              ></Produto>
            </li>
          ))
        ) : (
          <p>Cardápio não disponível</p>
        )}
      </List>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <div onClick={closeModal} className="overlay"></div>
        <ModalContent className="container">
          <Fechar src={close} alt="fechar" onClick={closeModal} />

          <ImagemDoItemDoCardapio src={modal.url} alt="" />

          <Informacoes>
            <h4>{modal.nome}</h4>
            <p>
              {modal.descricao} <br />
              <br />
              Serve: de {modal.porcao}
            </p>
            <Botao
              onClick={() => {
                closeModal()
                addToCart()
              }}
            >{`Adicionar ao carrinho - ${formataPreco(modal.preco)}`}</Botao>
          </Informacoes>
        </ModalContent>
      </Modal>
    </ListContainer>
  )
}

export default ProdutoList
