import { useParams } from 'react-router-dom'
import * as S from './styles'

type Props = {
  restaurants: Restaurant[]
}

const Hero = ({ restaurants }: Props) => {
  const { id } = useParams()
  const restaurantIndex = Number(id) - 1

  if (isNaN(restaurantIndex) || !restaurants[restaurantIndex]) {
    return <p>Restaurante não encontrado</p>
  }

  const restaurant = restaurants[restaurantIndex]

  return (
    <S.BackgroundImage style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <S.Title>{restaurant.tipo}</S.Title>
      <S.RestaurantName>{restaurant.titulo}</S.RestaurantName>
    </S.BackgroundImage>
  )
}

export default Hero
