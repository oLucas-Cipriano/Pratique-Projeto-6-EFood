import RestaurantDisplay from '../RestaurantDisplay'
import * as S from './styles'

type Props = {
  restaurantList: Restaurant[]
}

const RestaurantDisplayList = ({ restaurantList }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }
  return (
    <S.ListContainer>
      <S.List>
        {restaurantList.map((restaurant) => (
          <li key={restaurant.id}>
            <RestaurantDisplay
              description={restaurant.descricao}
              image={restaurant.capa}
              title={restaurant.titulo}
              avaliation={restaurant.avaliacao}
              infos={getRestaurantTags(restaurant)}
              link={`/restaurante/${restaurant.id}`}
            ></RestaurantDisplay>
          </li>
        ))}
      </S.List>
    </S.ListContainer>
  )
}

export default RestaurantDisplayList
