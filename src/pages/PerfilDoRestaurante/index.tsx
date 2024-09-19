import Header from '../../components/Header'

import ProdutoList from '../../components/ProdutoList'
import Hero from '../../components/Hero'
import { Container } from '../../styles'
import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'

const PerfilDoRestaurante = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

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
export default PerfilDoRestaurante
