import { nextSlider, prevSlider } from "./carrousel.js"
import { executeScrollToTop } from "./scrollToTop.js";

const btnChange = document.getElementById("change-btn");
const btnReturn = document.getElementById("return-btn");

btnChange.addEventListener('click', () => nextSlider())
btnReturn.addEventListener('click', () => prevSlider())

executeScrollToTop()