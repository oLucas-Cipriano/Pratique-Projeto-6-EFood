import { Restaurante as RestauranteModelo } from '../../pages/Home'
import Restaurante from '../Restaurante'
import { List, ListContainer } from './styles'

type Props = {
  restaurantes: RestauranteModelo[]
}

const RestauranteList = ({ restaurantes }: Props) => {
  const getRestauranteTags = (restaurante: RestauranteModelo) => {
    const tags = []

    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }

    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }
  return (
    <ListContainer>
      <List>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Restaurante
              descricao={restaurante.descricao}
              imagem={restaurante.capa}
              titulo={restaurante.titulo}
              avaliacao={restaurante.avaliacao}
              infos={getRestauranteTags(restaurante)}
              link={`/restautante/${restaurante.id}`}
            ></Restaurante>
          </li>
        ))}
      </List>
    </ListContainer>
  )
}

export default RestauranteList
