import EstiloGlobal, { Container } from './styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import PerfilDoRestaurante from './pages/PerfilDoRestaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route
      path="/perfil"
      element={<PerfilDoRestaurante></PerfilDoRestaurante>}
    ></Route>
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <Rotas></Rotas>
      </Container>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
