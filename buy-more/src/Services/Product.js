export function getProducts() {
  return fetch('http://localhost:3001/products')
    .then(data => data.json())
}

export function getCategories(){
  return fetch('http://localhost:3001/categories')
  .then(data => data.json())
}
