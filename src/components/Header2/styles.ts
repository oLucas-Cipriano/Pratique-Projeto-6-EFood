import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Cores } from '../../styles'

export const ImagemBackground = styled.div`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
  font-size: 18px;
  padding: 0 171px;
`

export const LinkParaRestaurantes = styled(Link)`
  text-decoration: none;
  color: ${Cores.vermelhoClaro};
`
