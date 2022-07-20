var root = document.documentElement
var theme_color = document.getElementById("theme_color")
var meta_color = document.getElementById("meta_color")

theme_color.addEventListener('change', () => {
    root.style.setProperty('--default', theme_color.value)
    meta_color.value = theme_color.value

    window.localStorage.setItem("theme_color", theme_color.value)
})

if (window.localStorage.getItem("theme_color")) {
    meta_color.value = window.localStorage.getItem("theme_color")
    theme_color.value = window.localStorage.getItem("theme_color")
    root.style.setProperty('--default', window.localStorage.getItem("theme_color"))
}