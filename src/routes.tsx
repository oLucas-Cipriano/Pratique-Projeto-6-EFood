import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import PerfilDoRestaurante from './pages/PerfilDoRestaurante'
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route
      path="/restautante/:id"
      element={<PerfilDoRestaurante></PerfilDoRestaurante>}
    ></Route>
  </Routes>
)

export default Rotas
