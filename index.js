const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
const sidebar = document.querySelector(".sidebar")
const container = document.querySelector(".container")
const mainSlide = document.querySelector(".main-slide")
const slidesCount = mainSlide?.querySelectorAll("div").length
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

upButton?.addEventListener("click", () => {
    changeSlide("up")
})
downButton?.addEventListener("click", () => {
    changeSlide("down")
})

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || event.key.toLowerCase() === "w")
        changeSlide("up")
    else if (event.key === "ArrowDown" || event.key.toLocaleLowerCase() === "s")
        changeSlide("down")
})

const changeSlide = (direction) => {
    if (direction === "up") {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === "down") {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
