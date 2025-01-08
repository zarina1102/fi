let darkMode = document.querySelector('.black')
let lightMode = document.querySelector('.light')

function darkMode() {
    let body = document.querySelector('body')
    body.style.background ='black'

    let links = document.querySelectorAll('a')
    links.style.color = '#3A68B8'

    let logo = document.querySelector('')
    logo.style.color = '#3A68B8'

    let text = document.querySelector('')
    text.style.color = '#3A68B8'

    let texts = document.querySelector('')
    texts.style.color = '#3A68B8'

    let butt = document.querySelector('')
    butt.style.color = '#3A68B8'


    for (const element of links) {
         element.style.color = '#3A68B8'
    }
}

function lightMode() {
    let body = document.querySelector('body')
    body.style.background ='#C4B5A5'

    let links = document.querySelectorAll('.as')

    let logo = document.querySelector('.ad')
    logo.style.color = 'black'

    let text = document.querySelector('.ada')
    text.style.color = 'black'

    let texts = document.querySelector('.ex')
    texts.style.color = 'black'

    let butt = document.querySelector('.butt')
    butt.style.color = 'black'


    for (const element of links) {
         element.style.color = 'black'
    }
}
