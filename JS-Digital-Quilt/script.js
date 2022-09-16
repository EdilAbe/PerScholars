const multiplySquare = (num=500) => {
for(let i = 0; i < num; i++){
const div = document.createElement('div')
console.log(div)
div.textContent = []
//Append element to DOM
const body = document.querySelector('body')
body.appendChild(div)

div.classList.add('square')
const randColorRGB = () => {
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const  b = Math.floor(Math.random()*256)
    const bgcolor = `rgb(${r}, ${g} , ${b})`
 return bgcolor
 }
 console.log(randColorRGB())
div.style.backgroundColor = randColorRGB()
 
div.style.width = '40px'
div.style.height = '30px'
div.style.display= 'flex'
div.style.alignContent= "flex-start"
body.style.flexWrap = 'wrap'
body.style.display = 'flex'
}

 
}

multiplySquare()




