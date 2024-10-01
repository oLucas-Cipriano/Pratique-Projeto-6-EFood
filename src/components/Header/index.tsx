import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  variant: 'principal' | 'secundary'
}

const Header = ({ variant }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  if (variant === 'principal') {
    return (
      <S.PrincipalBackgroundImage style={{ backgroundImage: `url(${fundo})` }}>
        <Link to="/">
          <img src={logo} alt="eplay" />
        </Link>
        <S.Title>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </S.Title>
      </S.PrincipalBackgroundImage>
    )
  } else {
    return (
      <S.SecundaryBackgroundImage style={{ backgroundImage: `url(${fundo})` }}>
        <S.LinkToRestaurants to="/">Restaurantes</S.LinkToRestaurants>
        <Link to="/">
          <img src={logo} alt="eplay" />
        </Link>
        <p onClick={() => dispatch(open())}>
          {items.length} produto(s) no carrinho
        </p>
      </S.SecundaryBackgroundImage>
    )
  }
}

export default Header
