import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'
import { ImagemBackground, LinkParaRestaurantes } from './styles'

const Header = () => (
  <ImagemBackground style={{ backgroundImage: `url(${fundo})` }}>
    <LinkParaRestaurantes to="/">Restaurantes</LinkParaRestaurantes>
    <Link to="/">
      <img src={logo} alt="eplay" />
    </Link>
    <p>0 produto(s) no carrinho</p>
  </ImagemBackground>
)

export default Header
