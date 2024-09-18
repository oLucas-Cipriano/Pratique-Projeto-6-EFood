import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'
import { ImagemBackground, Titulo } from './styles'

const Header = () => (
  <ImagemBackground style={{ backgroundImage: `url(${fundo})` }}>
    <Link to="/">
      <img src={logo} alt="eplay" />
    </Link>
    <Titulo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Titulo>
  </ImagemBackground>
)

export default Header
