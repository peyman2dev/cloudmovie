const insertToHtml = (items, container, element) => {
        items.forEach(item => {
            container.insertAdjacentHTML("beforeend", element(item))
        })

}

export default insertToHtml