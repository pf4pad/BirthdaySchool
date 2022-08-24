const buttonMen = document.querySelector('.header__button-men')
const buttonWomen = document.querySelector('.header__button-women')
const body = document.body
const cardImage = document.querySelector('.card__image')
const cardText = document.querySelector('.card__text')

const buttonText = document.querySelector('.header__button-change_text')
const buttonImage = document.querySelector('.header__button-change_image')

const state = {
  gender: body.classList.contains('women') ? 'women' : 'men'
}

const changeDom = () => {
  if (state.photo.includes('black')) {
    cardText.style.color = '#fff'
  } else {
    cardText.style.color = ''
  }
  cardImage.src = `img/${state.photo}`
  cardText.innerHTML = state.text.replaceAll('\n', '<br>')
}

const getData = () => fetch('db.json')
  .then(response => response.json())

const getRandomForArr = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length)
  return arr[randomNumber]
}
const getDataCard = () => {
  getData().then(data => {
    state.text = getRandomForArr(data.text[state.gender])
    state.photo = getRandomForArr(data.photo[state.gender])

    changeDom()

  })

}
const changeToMen = () => {
  if (state.gender !== 'men') {
    body.classList.add('men')
    body.classList.remove('women')
    state.gender = 'men'
    getDataCard()
  }

}
const changeToWomen = () => {
  if (state.gender !== 'women') {
    body.classList.add('women')
    body.classList.remove('men')
    state.gender = 'women'
    getDataCard()
  }

}

const changeText = () => {
  getData().then(data => {
    state.text = getRandomForArr(data.text[state.gender])
    changeDom()
  })
}
const changeImage = () => {
  getData().then(data => {

    state.photo = getRandomForArr(data.photo[state.gender])
    changeDom()

  })
}

buttonMen.addEventListener('click', changeToMen)
buttonWomen.addEventListener('click', changeToWomen)
buttonText.addEventListener('click', changeText)
buttonImage.addEventListener('click', changeImage)
getDataCard()