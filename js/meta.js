var updateButton = document.getElementById("update_button")
var meta_title = document.getElementById("meta_title")
var meta_description = document.getElementById("meta_description")
var meta_url = document.getElementById("meta_url")
var meta_image = document.getElementById("meta_image")
var meta_color = document.getElementById("meta_color")
var meta_author = document.getElementById("meta_author")
var meta_author_enabled = document.getElementById("meta_author_enabled")

let text = ''

var raw_textbox = document.getElementById("raw_text")

/* Raw */
updateButton.addEventListener("click", (e) => {

    text = ''

    if(meta_title.value) {
        text +=
`<!-- Title -->
<meta 
content="${meta_title.value}" 
property="og:title">`
    } 

    if(meta_description.value) {
        text +=
`\n\n<!-- Description -->
<meta 
content="${meta_description.value}" 
property="og:description">`
    }

    if (meta_url.value) {
        text += 
`\n\n<!-- Url -->
<meta 
content="${meta_url.value}" 
property="og:url">`
    }

    if (meta_color.value) {
        text +=
`\n\n<!-- Color -->
<meta 
content="${meta_color.value}" 
data-react-helmet="true" 
name="theme-color"></meta>`
    }

    if(meta_image.value) {
        text += 
`\n\n<!-- Image -->
<meta 
content="${meta_image.value}" 
property="og:image">  `
    }

    if(meta_author_enabled.checked && meta_author.value) {
        text +=
`\n\n<!-- Author -->
<meta 
content="${meta_author.value}" 
name="author">`
    } 


    raw_textbox.value = text
    
    e.preventDefault()
})

/* Preview */
var discord_preview = document.getElementById("discord_preview")
var discord_title = document.getElementById("discord_title")
var discord_description = document.getElementById("discord_description")
var discord_image = document.getElementById("discord_image")

updateButton.addEventListener('click', (e) => {

    if(meta_title.value) {
        discord_title.innerHTML = meta_title.value
    }

    if(meta_description.value) {
        discord_description.innerHTML = meta_description.value
    }

    if(meta_image.value) {
        discord_image.src = meta_image.value
    }

    if(meta_color) {
        discord_preview.style.borderLeft = `4px solid ${meta_color.value}`
    }

})