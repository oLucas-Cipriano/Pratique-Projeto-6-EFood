import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  background-color: ${Cores.vermelhoClaro};
  padding: 8px;
  color: ${Cores.beje};
`

export const Informacoes = styled.div`
  padding: 8px 0px;
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const Botao = styled.button`
  display: block;
  width: 100%;
  color: ${Cores.vermelhoClaro};
  background-color: ${Cores.beje};
  border: none;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
