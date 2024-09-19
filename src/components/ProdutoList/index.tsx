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

type Props = {
  restaurantes: Restaurante[]
}

interface ModalState {
  isVisible: boolean
  url: string
  nome: string
  descricao: string
  porcao: string
  preco: string
}

const ProdutoList = ({ restaurantes }: Props) => {
  const { id } = useParams()

  function extrairCardapioPorId(id: number) {
    const restaurante = restaurantes.find((r) => r.id === id)
    return restaurante ? restaurante.cardapio : null
  }

  const cardapio = extrairCardapioPorId(Number(id))

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: ''
  })

  const closeModal = () =>
    setModal({
      isVisible: false,
      url: '',
      nome: '',
      descricao: '',
      porcao: '',
      preco: ''
    })

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

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
                  preco: formataPreco(item.preco)
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
            <Botao>{`Adicionar ao carrinho - ${modal.preco}`}</Botao>
          </Informacoes>
        </ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </Modal>
    </ListContainer>
  )
}

export default ProdutoList
