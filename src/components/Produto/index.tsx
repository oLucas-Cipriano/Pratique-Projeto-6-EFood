import { Botao, Capa, Card, Descricao, Informacoes, Title } from './styles'

type Props = {
  descricao: string
  imagem: string
  titulo: string
}

const Produto = ({ descricao, imagem, titulo }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 125) {
      return descricao.slice(0, 122) + '...'
    } else {
      return descricao
    }
  }
  return (
    <Card>
      <Capa>
        <img src={imagem} alt="teste" />
      </Capa>
      <Informacoes>
        <Title>{titulo}</Title>
        <Descricao>{getDescricao(descricao)}</Descricao>
      </Informacoes>
      <Botao>Mais detalhes</Botao>
    </Card>
  )
}
export default Produto
