import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${colors.lightRed};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  max-width: 360px;
  width: 100%;

  h2 {
    color: ${colors.beige};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`
export const Button = styled.button`
  width: 100%;
  display: block;
  color: ${colors.lightRed};
  background-color: ${colors.beige};
  border: none;
  padding: 4px 0px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  line-height: 16px;
  margin-bottom: 8px;

  &.margin-top-24 {
    margin-top: 24px;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  margin-bottom: 8px;
  align-items: flex-end;
`

export const InputGroup = styled.div`
  flex: auto;
  max-width: auto;

  label {
    color: ${colors.beige};
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    font-weight: bold;
  }

  input {
    outline: none;
    background-color: ${colors.beige};
    height: 32px;
    padding: 8px;
    border: 2px solid ${colors.beige};
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    &.error {
      border: 2px solid red;
    }
  }
`

export const Completion = styled.div`
  p {
    color: ${colors.white};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
  h3 {
    color: ${colors.white};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`
