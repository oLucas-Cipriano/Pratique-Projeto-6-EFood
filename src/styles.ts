import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  branco: '#fff',
  vermelhoClaro: '#E66767',
  amarelo: '#FFB930',
  cinza: '#FFF8F2',
  beje: '#FFEBD9'
}

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Cores.cinza};
    color: ${Cores.vermelhoClaro};
  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`
