import { movies } from "../modules/api/api.js";
import pagination from "../modules/pagination/pagination.js";
import { VideoElement } from "../modules/pagination/Elements.js";
const $ = document

const moviesContainer = $.querySelector(".movies")
const buttonsWrapper = $.querySelector(".pagination-buttons")




pagination({
    container: moviesContainer,
    initItems: movies,
    rows: 5,
    buttonsWrapper: buttonsWrapper,
    Element: VideoElement
})


