export const VideoElement = (item) => {
  return (`
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
                ${item.countries.map(country => country).join(", ")}
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
            <!-- duration -->
            <div class="movie-details-box">
              <div class="title">
                <p>مدت زمان</p>
              </div>
              <div class="seperator"></div>
              <div class="value">
                <span> ${item.duration} دقیقه </span>
              </div>
            </div>
          </section>
          <div class="movie-caption font-light">${item.description}</div>
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
      <footer class="movie-footer">
      <button class="button info font-regular">
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="download-svg">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
</span>
      <span>
      دانلود فیلم
      </span>
      </button>
      </footer>
    </article>`)
}

export const NavbarElement = item => {
  return (
    `
    <a href="${item.url}" class="navbar-item">
    ${item.title}
  </a>
  `
  )
}