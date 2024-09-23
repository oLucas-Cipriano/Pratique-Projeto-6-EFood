import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  isOpen: boolean
  items: ItemDoCardapio[]
}
const initialState: CartState = {
  items: [],
  isOpen: false
}

export type ItemDoCardapio = {
  foto: string
  preco: number
  id: number
  nome: string
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<ItemDoCardapio>) => {
      const game = state.items.find((item) => item.id === action.payload.id)
      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { open, close, add, remove } = cartSlice.actions

export default cartSlice.reducer
