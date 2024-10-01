export const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.price) {
      return (accumulator += currentItem.price)
    }
    return 0
  }, 0)
}

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
