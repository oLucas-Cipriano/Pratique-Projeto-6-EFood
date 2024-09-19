import { BrowserRouter } from 'react-router-dom'

import EstiloGlobal from './styles'
import Footer from './components/Footer'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal></EstiloGlobal>
      <Rotas></Rotas>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
