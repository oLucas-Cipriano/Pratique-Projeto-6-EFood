import styled from 'styled-components'
import { Cores } from '../../styles'

export const RedesSociais = styled.div`
  margin-top: 32px;
  margin-bottom: 80px;

  a {
    margin: 0px 4px;
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  background-color: ${Cores.beje};

  a {
    cursor: pointer;
  }

  p {
    font-size: 10px;
    text-align: center;
  }
`
