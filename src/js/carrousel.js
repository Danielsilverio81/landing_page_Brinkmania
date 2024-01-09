const slider = document.querySelectorAll(".slider");

let currentSlider = 0;

const hiddenSlider = () => {
    slider.forEach(img => img.classList.remove('on'))
}

const showSlider = () => {
    slider[currentSlider].classList.add('on')
}

export const nextSlider = () => {
    hiddenSlider()
    if (currentSlider === slider.length -1) {
        currentSlider = 0
    } else {
        currentSlider++
    }
    showSlider()
}

export const prevSlider = () => {
    if (currentSlider === 0) {
        currentSlider = slider.length -1
    } else {
        currentSlider--
    }  
    hiddenSlider()
    showSlider()
}