import {
  Capa,
  Card,
  Descricao,
  Informacoes,
  Infos,
  Notas,
  SaibaMais,
  Title
} from './styles'
import star from '../../assets/images/star_favorite.svg'
import Tag from '../Tag'

type Props = {
  descricao: string
  imagem: string
  infos: string[]
  titulo: string
  avaliacao: number
  link: string
}

const Restaurante = ({
  descricao,
  imagem,
  infos,
  titulo,
  avaliacao,
  link
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 234) {
      return descricao.slice(0, 231) + '...'
    } else {
      return descricao
    }
  }
  return (
    <Card>
      <Capa>
        <img src={imagem} alt="teste" />
      </Capa>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Informacoes>
        <div>
          <Title>{titulo}</Title>
          <Notas>
            {avaliacao}
            <img src={star} alt="estrela" />
          </Notas>
        </div>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <SaibaMais to={link}>Saiba mais</SaibaMais>
      </Informacoes>
    </Card>
  )
}

export default Restaurante
