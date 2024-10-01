import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const PrincipalBackgroundImage = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  height: 384px;
  flex-direction: column;
`

export const SecundaryBackgroundImage = styled(PrincipalBackgroundImage)`
  justify-content: space-between;
  flex-direction: row;
  height: 186px;
  font-size: 18px;
  padding: 0 171px;

  p {
    cursor: pointer;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  margin-top: 136px;
`
export const LinkToRestaurants = styled(Link)`
  text-decoration: none;
  color: ${colors.lightRed};
`
