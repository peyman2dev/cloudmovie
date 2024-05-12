import { getMenus, getMovies } from "../modules/api/api.js";
import pagination from "../modules/pagination/pagination.js";
import { NavbarElement, VideoElement } from "../modules/insertToHtml/Elements.js";
import insertToHtml from "../modules/insertToHtml/insertToHtml.js";
import themeHandler from "../modules/themeHandler/themeHandler.js";

const $ = document

const moviesContainer = $.querySelector(".movies")
const buttonsWrapper = $.querySelector(".pagination-buttons")
const navItemsContainer = $.querySelector(".navbar-items")

let movies = await getMovies()
const menus = await getMenus()


// Navbar Items Insertation
insertToHtml(menus, navItemsContainer, NavbarElement)

pagination({
    container: moviesContainer,
    initItems: movies,
    rows: 5,
    buttonsWrapper: buttonsWrapper,
    Element: VideoElement
})


themeHandler()