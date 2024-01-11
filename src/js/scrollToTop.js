let btn = document.getElementById('to-top-btn');
let btnToShow = document.querySelector('.btn-top')

const checkElementAppears = () => {
    let elementPosition = btn.getBoundingClientRect().top
    let scrollPosition = window.scrollY || document.documentElement.scrollTop

    if (elementPosition - scrollPosition <= 100) {
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