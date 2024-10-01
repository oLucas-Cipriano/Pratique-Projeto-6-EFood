import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  lightRed: '#E66767',
  yellow: '#FFB930',
  gray: '#FFF8F2',
  beige: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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
    background-color: ${colors.gray};
    color: ${colors.lightRed};
  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
