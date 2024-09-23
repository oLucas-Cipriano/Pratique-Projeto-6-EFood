import Header from '../../components/Header'

import ProdutoList from '../../components/ProdutoList'
import Hero from '../../components/Hero'
import { Container } from '../../styles'
import { useGetRestaurantesQuery } from '../../services/api'

const PerfilDoRestaurante = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Header variante="secundario"></Header>
        <Hero restaurantes={restaurantes}></Hero>
        <Container>
          <ProdutoList restaurantes={restaurantes}></ProdutoList>
        </Container>
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default PerfilDoRestaurante
