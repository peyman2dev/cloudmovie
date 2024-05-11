let movies = []

const res = await fetch('http://localhost:3000/v1/movies')
const data = await res.json()
movies = data


export { movies }