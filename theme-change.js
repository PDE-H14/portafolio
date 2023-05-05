var icon = document.getElementById("theme-icon");
var i = document.getElementById("theme-ib")
var logo = document.getElementById("logo")
var mancha = document.getElementById("back-img")

if (localStorage.getItem("theme")==null){
    localStorage.setItem("theme", "light")
}

let localData = localStorage.getItem("theme")

if (localData == "light"){
    i.classList.remove('fa-sun')
    i.classList.add("fa-moon")
    i.style.color="#1e1e1e"
    logo.src = "images/Logo-PDE-H14-light.png"
    mancha.src = "images/Mancha-light (1).png"
    document.body.classList.remove("dark-theme")
} else if (localData == "dark"){
    i.classList.remove("fa-moon")
    i.classList.add("fa-sun")
    i.style.color="#fff"
    logo.src = "images/Logo-PDE-H14-dark.png"
    mancha.src = "images/Mancha-dark (1).png"
    document.body.classList.add("dark-theme")
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        i.classList.remove("fa-moon")
        i.classList.add("fa-sun")
        i.style.color="#fff"
        logo.src = "images/Logo-PDE-H14-dark.png"
        mancha.src = "images/Mancha-dark (1).png"
        localStorage.setItem("theme", "dark")
    } else {
        i.classList.remove('fa-sun')
        i.classList.add("fa-moon")
        i.style.color="#1e1e1e"
        logo.src = "images/Logo-PDE-H14-light.png"
        mancha.src = "images/Mancha-light (1).png"
        localStorage.setItem("theme", "light")
    }
}