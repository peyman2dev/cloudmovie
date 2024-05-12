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
    </article>`)
}

