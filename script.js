let words = [
    'zakk',
    'erin',
    'paula',
    'john',
    'hammad'
]

let getRandom = document.querySelector('.get-random')
console.log(getRandom)
let lettersList = document.querySelector('.letters-list')
let keys = document.querySelectorAll('p')

getRandom.addEventListener('click', function (evt) {
    evt.preventDefault()
    console.log('button works')
    let randomWord = words[Math.floor(Math.random() * words.length)]
    console.log(randomWord)
    for (let i = 0; i < randomWord.length; i++) {
        let letterBlank = document.createElement('li')
        letterBlank.innerHTML = '_'
        lettersList.appendChild(letterBlank)
    }
})

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function (evt) {
        evt.preventDefault()
        console.log(keys[i].dataset.letter)
    })
}
