import styled from 'styled-components'
import { Cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
`

export const ListContainer = styled.div`
  padding: 56px 171px 120px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  display: flex;
  position: relative;
  max-width: 1024px;
  max-height: 344px;
  background-color: ${Cores.vermelhoClaro};
  color: ${Cores.branco};
  z-index: 2;
  padding: 32px;
`
export const Informacoes = styled.div`
  margin-left: 24px;
  h4 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`
export const ImagemDoItemDoCardapio = styled.img`
  width: 280px;
  height: 280px;
`

export const Fechar = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
`

export const Botao = styled.button`
  display: inline-block;
  color: ${Cores.vermelhoClaro};
  background-color: ${Cores.beje};
  border: none;
  padding: 4px 7px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  line-height: 16px;
`
