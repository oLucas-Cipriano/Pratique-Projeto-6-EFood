import Header from '../../components/Header'
import ProductDisplayList from '../../components/ProductDisplayList'
import Hero from '../../components/Hero'

import { useGetRestaurantsQuery } from '../../services/api'

import { Container } from '../../styles'

const RestaurantProfile = () => {
  const { data } = useGetRestaurantsQuery()

  if (data) {
    return (
      <>
        <Header variant="secundary"></Header>
        <Hero restaurants={data}></Hero>
        <Container>
          <ProductDisplayList restaurants={data}></ProductDisplayList>
        </Container>
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default RestaurantProfile
