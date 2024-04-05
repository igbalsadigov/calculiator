const numbers = document.querySelectorAll('.btn')
const display = document.getElementById('inp')
const clear = document.getElementById('clear')
const hesabla = document.getElementById('btn')

numbers.forEach(number  => {
  number.addEventListener('click', () => {
    display.value += number.innerText
  })
});

clear.addEventListener('click', () => {
  display.value = ""
})
hesabla.addEventListener('click', () => {
  const result = eval(display.value)
  display.value = result
})