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

  > div {
    color: ${colors.beige};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 16px;

    p,
    span {
      font-size: 14px;
      font-weight: bold;
    }
  }

  button {
    width: 100%;
    color: ${colors.lightRed};
    background-color: ${colors.beige};
    border: none;
    padding: 4px 0px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    line-height: 16px;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const CartItem = styled.li`
  background-color: ${colors.beige};
  margin-bottom: 16px;
  position: relative;
  padding: 8px 0 12px 8px;
  display: flex;
`
export const MenuItemImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  margin-right: 8px;
`

export const Trash = styled.img`
  position: absolute;
  height: 16px;
  width: 16px;
  bottom: 8px;
  right: 8px;
`
export const Infos = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }
`
