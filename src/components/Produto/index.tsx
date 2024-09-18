import { Botao, Card, Descricao, Informacoes, Title } from './styles'

type Props = {
  description: string
  image: string
  title: string
}

const Produto = ({ description, image, title }: Props) => (
  <Card>
    <img src={image} alt="teste" />
    <Informacoes>
      <Title>{title}</Title>
      <Descricao>{description}</Descricao>
    </Informacoes>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)

export default Produto
