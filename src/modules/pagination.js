let currentPage = 1
let lastIndex
let initItems
let startIndex
let pageSize
let totalPages
let initContainer
let paginatedItems = []

const pageCalculator = () => {
  totalPages = Math.ceil(initItems.length / pageSize)
  lastIndex = pageSize * currentPage
  startIndex = lastIndex - pageSize
  paginatedItems = initItems.slice(startIndex, lastIndex)
}

const pageChange = newPage => {
  currentPage = newPage
  pageCalculator()
  renderElements()
}

const renderElements = () => {
  initContainer.innerHTML = ""

  paginatedItems.forEach(item => {
    initContainer.insertAdjacentHTML("afterbegin",
      `
            <!-- Movie Card -->
            <article class="movie-card">
              <header>
                <a href="#">
                  <h3 class="movie-title">
                دانلود فیلم  ${item.title}
                  </h3>
                </a>
              </header>
              <main>
                <!-- Movie details -->
                <div class="content">
                  <!-- IMDb Rating -->
                  <div class="imdb-rating">
                    <div class="imdb-icon">
                      <strong class="font-black">IMDb</strong>
                    </div>
                    <div>
                      <a class="flex gap-1.5 items-center" href="#">
                        <p class="total-rate">${item.ratings}</p>
                        <span class="text-sm text-gray"> 8.6 از 10 </span>
                        <span class="text-sm text-gray">
                          میانگین رای 1,693,580 نفر</span
                        >
                      </a>
                    </div>
                  </div>
                  <!-- Details card -->
                  <section class="movie-details-section">
                    <!-- Quality -->
                    <div class="movie-details-box">
                      <div class="title">
                        <p>کیفیت</p>
                      </div>
                      <div class="seperator"></div>
                      <div class="value highlighted">
                        <span> ${item.quality} </span>
                      </div>
                    </div>
    
                    <!-- genre -->
                    <div class="movie-details-box">
                      <div class="title">
                        <p>ژانر</p>
                      </div>
                      <div class="seperator"></div>
                      <div class="value">
                        <span> BluRay </span>
                      </div>
                    </div>
                    <!-- year -->
                    <div class="movie-details-box">
                      <div class="title">
                        <p>سال تولید</p>
                      </div>
                      <div class="seperator"></div>
                      <div class="value">
                        <span> ${item.year} </span>
                      </div>
                    </div>
                    <!-- country -->
                    <div class="movie-details-box">
                      <div class="title">
                        <p>محصول</p>
                      </div>
                      <div class="seperator"></div>
                      <div class="value">
                        ${item.countries.forEach(country => {
        console.log(country)
        return "s"
      })
      }
                      </div>
                    </div>
                    <!-- language -->
                    <div class="movie-details-box">
                      <div class="title">
                        <p>زبان</p>
                      </div>
                      <div class="seperator"></div>
                      <div class="value">
                        <span> انگلیسی </span>
                      </div>
                    </div>
                    <!-- language -->
                    <div class="movie-details-box">
                      <div class="title">
                        <p>زبان</p>
                      </div>
                      <div class="seperator"></div>
                      <div class="value">
                        <span> 169 دقیقه </span>
                      </div>
                    </div>
                  </section>
                </div>
                <!-- Movie cover -->
                <div class="cover">
                  <a href="#">
                    <img
                      src="${item.cover}"
                      alt=""
                    />
                  </a>
                </div>
              </main>
              <footer></footer>
            </article>`
    )
  })


}

const buttons = (items, rows, buttonsWrapper) => {
  let _buttons = []
  pageCalculator(items)

  for (let i = 1; i <= totalPages; i++) {
    _buttons.push(`<li class="pagination-button ${Number(currentPage) == i ? "active-page" : ""}">${i}</li>`)
  }

  _buttons.forEach(button => {
    buttonsWrapper.insertAdjacentHTML('beforeend', button)
  })

  let allBtns = document.querySelectorAll('.pagination-button')

  allBtns.forEach(button => button.addEventListener('click', () => pageChange(button.textContent)))

}

export default function pagination({
  items,
  container,
  rows,
  buttonsWrapper
}) {
  initContainer = container
  initItems = items
  pageSize = rows
  pageCalculator()
  renderElements(container)

  buttons(items, rows, buttonsWrapper)

}