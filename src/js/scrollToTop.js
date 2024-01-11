let btn = document.getElementById('to-top-btn');
let btnToShow = document.querySelector('.btn-top')

const checkElementAppears = () => {
    let elementPosition = btn.getBoundingClientRect().top
    let scrollPosition = document.documentElement.scrollTop
    let halfPageHeight = window.innerHeight / 2;

    if (elementPosition - scrollPosition < -halfPageHeight) {
        btnToShow.style.opacity = "1"
    } else {
        btnToShow.style.opacity = "0"
    }
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}



export function executeScrollToTop() {
window.addEventListener('scroll', checkElementAppears)
btn.addEventListener('click', scrollToTop)
}