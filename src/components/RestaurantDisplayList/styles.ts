import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ListContainer = styled.div`
  padding: 80px 171px 120px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 80px 60px;
  }
`
