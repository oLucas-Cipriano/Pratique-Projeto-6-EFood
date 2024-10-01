import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantProfile from './pages/RestaurantProfile'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route
      path="/restaurante/:id"
      element={<RestaurantProfile></RestaurantProfile>}
    ></Route>
  </Routes>
)

export default Rotas
