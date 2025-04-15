const productos = [
  { title: 'Play 5', price: 500, id: 1 },
  { title: 'Switch 2', price: 600, id: 2 },
  { title: 'Nintendo 3ds', price: 200, id: 3 },
  { title: 'Play 5', price: 300, id: 4 }
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 2000)
  })
}
