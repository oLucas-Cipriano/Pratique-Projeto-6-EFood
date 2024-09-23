import { BrowserRouter } from 'react-router-dom'

import EstiloGlobal from './styles'
import Footer from './components/Footer'

import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal></EstiloGlobal>
        <Rotas></Rotas>
        <Footer></Footer>
        <Cart></Cart>
      </BrowserRouter>
    </Provider>
  )
}

export default App
