const buttonMen = document.querySelector('.header__button-men')
const buttonWomen = document.querySelector('.header__button-women')
const body = document.body

let gender = 'women'
const changeToMen = () => {
  if (gender !== 'men') {
    body.classList.add('men')
    buttonMen.classList.add('header__button-men_active')
    body.classList.remove('women')
    buttonWomen.classList.remove('header__button-women_active')
    gender = 'men'
  }

}
const changeToWomen = () => {
  if (gender !== 'women') {
    body.classList.add('women')
    buttonWomen.classList.add('header__button-women_active')
    body.classList.remove('men')
    buttonMen.classList.remove('header__button-men_active')
    gender = 'women'
  }

}

buttonMen.addEventListener('click', changeToMen)
buttonWomen.addEventListener('click', changeToWomen)