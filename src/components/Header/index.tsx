import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'
import {
  ImagemBackgroundPrincipal,
  ImagemBackgroundSecundario,
  LinkParaRestaurantes,
  Titulo
} from './styles'

type Props = {
  variante: 'principal' | 'secundario'
}
const Header = ({ variante }: Props) => {
  if (variante === 'principal') {
    return (
      <ImagemBackgroundPrincipal style={{ backgroundImage: `url(${fundo})` }}>
        <Link to="/">
          <img src={logo} alt="eplay" />
        </Link>
        <Titulo>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </Titulo>
      </ImagemBackgroundPrincipal>
    )
  } else {
    return (
      <ImagemBackgroundSecundario style={{ backgroundImage: `url(${fundo})` }}>
        <LinkParaRestaurantes to="/">Restaurantes</LinkParaRestaurantes>
        <Link to="/">
          <img src={logo} alt="eplay" />
        </Link>
        <p>0 produto(s) no carrinho</p>
      </ImagemBackgroundSecundario>
    )
  }
}

export default Header
