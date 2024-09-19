import { useParams } from 'react-router-dom'
import { Restaurante } from '../../pages/Home'
import { ImagemBackground, NomeDoRestaurante, Titulo } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const PosHeader = ({ restaurantes }: Props) => {
  const { id } = useParams()
  const restauranteIndex = Number(id) - 1

  // Verifica se id é um número válido e se existe um restaurante com esse índice
  if (isNaN(restauranteIndex) || !restaurantes[restauranteIndex]) {
    return <p>Restaurante não encontrado</p>
  }

  const restaurante = restaurantes[restauranteIndex]

  return (
    <ImagemBackground style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <Titulo>{restaurante.tipo}</Titulo>
      <NomeDoRestaurante>{restaurante.titulo}</NomeDoRestaurante>
    </ImagemBackground>
  )
}

export default PosHeader
