import Header from '../../components/Header'
import RestaurantDisplayList from '../../components/RestaurantDisplayList'

import { useGetRestaurantsQuery } from '../../services/api'

import { Container } from '../../styles'

const Home = () => {
  const { data } = useGetRestaurantsQuery()

  if (data) {
    return (
      <>
        <Header variant="principal"></Header>
        <Container>
          <RestaurantDisplayList restaurantList={data}></RestaurantDisplayList>
        </Container>
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
