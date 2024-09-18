import {
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
  description: string
  image: string
  infos: string[]
  title: string
  nota: number
  link: string
}

const Perfil = ({ description, image, infos, title, nota, link }: Props) => (
  <Card>
    <img src={image} alt="teste" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Informacoes>
      <div>
        <Title>{title}</Title>
        <Notas>
          {nota}
          <img src={star} alt="estrela" />
        </Notas>
      </div>
      <Descricao>{description}</Descricao>
      <SaibaMais to={link}>Saiba mais</SaibaMais>
    </Informacoes>
  </Card>
)

export default Perfil
