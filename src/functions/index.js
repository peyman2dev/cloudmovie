import { movies } from "../modules/api/api.js";
import pagination from "../modules/pagination.js";
const $ = document

const moviesContainer = $.querySelector(".movies")
const buttonsWrapper = $.querySelector(".pagination-buttons")

pagination({
    container: moviesContainer,
    items: movies,
    rows: 5,
    buttonsWrapper: buttonsWrapper
})


