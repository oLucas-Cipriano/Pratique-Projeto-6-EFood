import Header from '../../components/Header'
import RestauranteList from '../../components/RestauranteList'
import { useGetRestaurantesQuery } from '../../services/api'
import { Container } from '../../styles'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Header variante="principal"></Header>
        <Container>
          <RestauranteList restaurantes={restaurantes}></RestauranteList>
        </Container>
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
