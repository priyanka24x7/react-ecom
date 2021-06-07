export function getProducts() {
  return fetch('http://localhost:3001/products')
    .then(data => data.json())
}