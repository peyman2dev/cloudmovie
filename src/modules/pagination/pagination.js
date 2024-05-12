let currentPage = 1
let items
let totalPages
let lastIndex
let pageSize
let buttonsContainer
let startIndex
let initElement
let appContainer
let paginatedItems = []

const paginationCalculator = () => {
  totalPages = Math.ceil(items.length / pageSize)
  lastIndex = currentPage * pageSize
  startIndex = lastIndex - pageSize
  paginatedItems = items.slice(startIndex, lastIndex)

}

const pageUpdate = page => {
  currentPage = page
  paginationCalculator()
  buttons()
  renderingElements()
}


const buttons = () => {
  let btns = []
  for (let i = 1; i <= totalPages; i++) {
    btns.push(`<li onclick="pageUpdate(${i})" class="pagination-button ${currentPage === i ? "active-page" : "not-active"}">${i}</li>`)
  }
  buttonsContainer.innerHTML = ""
  btns.forEach(button => {
    buttonsContainer.insertAdjacentHTML('beforeend', button)
  })
}

window.pageUpdate = pageUpdate

const renderingElements = () => {
  appContainer.innerHTML = ""
  paginatedItems.map(item => {
    appContainer.insertAdjacentHTML("afterbegin", (initElement(item)))
  })
}


const pagination = ({ rows, initItems, Element, container, buttonsWrapper }) => {
  initElement = Element
  appContainer = container
  buttonsContainer = buttonsWrapper
  items = initItems
  pageSize = rows


  // Functions
  paginationCalculator()
  renderingElements()
  buttons()
}

export default pagination