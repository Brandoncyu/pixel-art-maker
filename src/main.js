let selected

let red = document.querySelector('#red')
let orange = document.querySelector('#orange')
let yellow = document.querySelector('#yellow')
let green = document.querySelector('#green')
let blue = document.querySelector('#blue')
let indigo = document.querySelector('#indigo')
let violet = document.querySelector('#violet')
let black = document.querySelector('#black')
let white = document.querySelector('#white')
let currentColor = document.querySelector('#current-color')

red.addEventListener('click', function(){
  selected = 'red'
  console.log(selected)
  currentColor.style.backgroundColor=selected
})

orange.addEventListener('click', function(){
  selected = 'orange'
  console.log(selected)
  currentColor.style.backgroundColor=selected
})

yellow.addEventListener('click', function(){
  selected = 'yellow'
  console.log(selected)
  currentColor.style.backgroundColor=selected
})

green.addEventListener('click', function(){
  selected = 'green'
  console.log(selected)
  currentColor.style.backgroundColor=selected
})

blue.addEventListener('click', function(){
  selected = 'blue'
  console.log(selected)
  currentColor.style.backgroundColor=selected
})

indigo.addEventListener('click', function(){
  selected = 'indigo'
  console.log(selected)
  currentColor.style.backgroundColor=selected
})

violet.addEventListener('click', function(){
  selected = 'violet'
  console.log(selected)
  currentColor.style.backgroundColor=selected
})

black.addEventListener('click', function(){
  selected = 'black'
  console.log(selected)
  currentColor.style.backgroundColor=selected
})

white.addEventListener('click', function(){
  selected = 'white'
  console.log(selected)
  currentColor.style.backgroundColor=selected
})




grid = Array.from(document.querySelectorAll('#grid td'))

console.log(grid)

grid.forEach(element => {
  element.addEventListener('click', function(event){
    if (!selected) alert('pick a color')
    element.style.backgroundColor = selected
  })
})
