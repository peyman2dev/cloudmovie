
const getMovies = async () => {
    const res = await fetch('http://localhost:3000/v1/movies')
    const data = await res.json()
    return data
}


const getMenus = async () => {
    const res = await fetch('http://localhost:3000/v1/menus')
    const data = await res.json()
    return data
}



export { getMovies, getMenus }