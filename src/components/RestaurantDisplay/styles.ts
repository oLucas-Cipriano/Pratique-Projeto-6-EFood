import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  border: 1px solid ${colors.lightRed};
  position: relative;

  ${TagContainer} {
    margin-left: 8px;
  }
`
export const Cover = styled.div`
  img {
    width: 472px;
    height: 217px;
    object-fit: cover;
  }
`

export const Informations = styled.div`
  padding: 8px;
  background-color: ${colors.white};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const TagInfos = styled.div`
  position: absolute;
  top: 22px;
  right: 20px;
`
export const Assessment = styled.span`
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
export const Description = styled.p`
  font-size: 14px;
  margin: 16px 0px;
`

export const LearnMore = styled(Link)`
  background-color: ${colors.lightRed};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
