let words = [
    'zakk',
    'erin',
    'paula',
    'john',
    'hammad'
]

let getRandom = document.querySelector('.get-random')
console.log(getRandom)

getRandom.addEventListener('click', function (evt) {
    evt.preventDefault()
    console.log('button works')
    let randomWord = words[Math.floor(Math.random() * words.length)]
    console.log(randomWord)
})