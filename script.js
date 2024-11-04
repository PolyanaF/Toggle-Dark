const checkbox = document.getElementById('checkbox')
const container= document.querySelector('.container')
const header= document.querySelector('header')
const p = document.querySelectorAll('p')


checkbox.addEventListener('change', () => {
    document.body.classList.toggle('body-dark')
    container.classList.toggle('container-dark')
    header.classList.toggle('header-dark')
    p.forEach((item) => {
        item.classList.toggle('bolinhas-dark')
    })
})