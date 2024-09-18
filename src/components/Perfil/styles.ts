import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  border: 1px solid ${Cores.vermelhoClaro};
  position: relative;

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Informacoes = styled.div`
  padding: 8px;
  background-color: ${Cores.branco};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 22px;
  right: 20px;
`
export const Notas = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
`
export const Descricao = styled.p`
  font-size: 14px;
  margin: 16px 0px;
`

export const SaibaMais = styled(Link)`
  background-color: ${Cores.vermelhoClaro};
  color: ${Cores.branco};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
