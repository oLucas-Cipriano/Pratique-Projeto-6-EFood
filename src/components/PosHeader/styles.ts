import styled from 'styled-components'
import { Cores } from '../../styles'

export const ImagemBackground = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: ${Cores.branco};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 100;
  position: absolute;
  top: 25px;
  left: 170px;
  z-index: 2;
`

export const NomeDoRestaurante = styled.h3`
  font-size: 32px;
  font-weight: 900;
  position: absolute;
  bottom: 25px;
  left: 170px;
  z-index: 2;
`
