var icon = document.getElementById("theme-icon");
var logo = document.getElementById("logo")
var mancha = document.getElementById("back-img")

if (localStorage.getItem("theme")==null){
    localStorage.setItem("theme", "light")
}

let localData = localStorage.getItem("theme")

if (localData == "light"){
    icon.src = "images/moon.png"
    logo.src = "images/Logo-PDE-H14-light.png"
    mancha.src = "images/Mancha-light (1).png"
    document.body.classList.remove("dark-theme")
} else if (localData == "dark"){
    icon.src = "images/sun-light.png"
    logo.src = "images/Logo-PDE-H14-dark.png"
    mancha.src = "images/Mancha-dark (1).png"
    document.body.classList.add("dark-theme")
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "images/sun-light.png"
        logo.src = "images/Logo-PDE-H14-dark.png"
        mancha.src = "images/Mancha-dark (1).png"
        localStorage.setItem("theme", "dark")
    } else {
        icon.src = "images/moon.png"
        logo.src = "images/Logo-PDE-H14-light.png"
        mancha.src = "images/Mancha-light (1).png"
        localStorage.setItem("theme", "light")
    }
}