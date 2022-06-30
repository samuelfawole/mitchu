const header = document.querySelector('#header')
const about = document.querySelector('.about-text')
const btnLg = document.querySelector('.btn-large')
const menu = document.querySelector('#menu')
const close = document.querySelector('.close')
const Top = document.querySelector('.top')

window.addEventListener('scroll', slideHeader)

slideHeader()

function slideHeader() {
  const triggerBottom = window.innerHeight / 2

  const boxBut = header.getBoundingClientRect().bottom

  if (boxBut < triggerBottom) {
    about.classList.add('show')
    document.querySelector('.navigation').classList.add('nav-show')
    document.querySelector('.logo').classList.add('show-logo')
  } else {
    about.classList.remove('show')
    document.querySelector('.navigation').classList.remove('nav-show')
    document.querySelector('.logo').classList.remove('show-logo')
  }
}
