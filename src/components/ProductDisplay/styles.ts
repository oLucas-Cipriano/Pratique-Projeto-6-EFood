import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.lightRed};
  padding: 8px;
  color: ${colors.beige};
`
export const Cover = styled.div`
  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
`

export const Informations = styled.div`
  padding: 8px 0px;
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const Button = styled.button`
  display: block;
  width: 100%;
  color: ${colors.lightRed};
  background-color: ${colors.beige};
  border: none;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
