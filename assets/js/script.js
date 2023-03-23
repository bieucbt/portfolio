
const icon_bar = document.querySelector('.icon-menu')
const header_navbar = document.querySelector('.header__navbar')
const li = document.querySelectorAll('li')
const back = document.querySelector('.back-home .icon')


icon_bar.onclick = () =>{
    header_navbar.classList.toggle('open')
    icon_bar.classList.toggle('open')
}

li.forEach(li => {
    li.onclick = () =>{
        header_navbar.classList.toggle('open')
        icon_bar.classList.toggle('open')
    }
})

back.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
}

window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        back.classList.toggle('open', window.scrollY > 0)
    }else{
        back.classList.toggle('open')
    }
}) 