let menuList = document.getElementById('menuList')

function allMenuItems() {

    for (let index = 0; index < dishes.length; index++) {
        let plate = dishes[index]
        let liItem = `<div class="style_li"><img src=${plate.imageURL} class="food_images"><li><h2 class="food_titles">${plate.title}</h2> ${plate.description}  $${plate.price}</li><hr></div>`
        menuList.innerHTML += liItem
    }
}

allMenuItems()

let all = document.getElementById('allButton')
let apps = document.getElementById('apps')
let entrees = document.getElementById('entrees')
let desserts = document.getElementById('desserts')

all.addEventListener('click', function() {
    menuList.innerHTML = ''
    allMenuItems()
})

apps.addEventListener('click', function() {
    menuList.innerHTML = ''
    let title = document.createElement('h2')
    title.innerHTML = "Starters"
    title.className = "category"
    menuList.appendChild(title)
    for (let index = 0; index < dishes.length; index++) {
        let plate = dishes[index]
        if (plate.course === "Starters") {
            let liItem = `<img src=${plate.imageURL} class="food_images"><li><h2 class="food_titles">${plate.title}</h2> ${plate.description}  $${plate.price}</li><hr>`
            menuList.innerHTML += liItem
        }

    }
})

entrees.addEventListener('click', function() {
    menuList.innerHTML = ''
    let title = document.createElement('h2')
    title.innerHTML = "Entrees"
    title.className = "category"
    menuList.appendChild(title)
    for (let index = 0; index < dishes.length; index++) {
        let plate = dishes[index]
        if (plate.course === "Entrees") {
            let liItem = `<img src=${plate.imageURL} class="food_images"><li><h2 class="food_titles">${plate.title}</h2> ${plate.description}  $${plate.price}</li><hr>`
            menuList.innerHTML += liItem
        }

    }
})

desserts.addEventListener('click', function() {
    menuList.innerHTML = ''
    let title = document.createElement('h2')
    title.innerHTML = "Desserts"
    title.className = "category"
    menuList.appendChild(title)
    for (let index = 0; index < dishes.length; index++) {
        let plate = dishes[index]
        if (plate.course === "Desserts") {
            let liItem = `<img src=${plate.imageURL} class="food_images"><li><h2 class="food_titles">${plate.title}</h2> ${plate.description}  $${plate.price}</li><hr>`
            menuList.innerHTML += liItem
        }

    }
})