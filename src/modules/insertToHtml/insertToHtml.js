const insertToHtml = (items, container, element) => {
    if (element) {
        items.forEach(item => {
            container.insertAdjacentHTML("beforeend", element(item))
        })
    } else {
        items.forEach(item => {
            container.insertAdjacentHTML('beforeend', item)
        })
    }

}

export default insertToHtml