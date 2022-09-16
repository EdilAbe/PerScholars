
// const ul = document.querySelector('ul')
// const li = document.querySelector('li')
// const body = document.querySelector('body')

// li.addEventListener('click', function (e) {
//     console.dir(e);
//     console.log(e.target);
//     e.stopPropagation()
// })

// ul.addEventListener('click', function(e){
//     console.log(e.target);
// })

// body.addEventListener('click', function(e){
//     console.log(e.target);
// })
const COLORS_ARRAY = [
    "red",
    "yellow",
    "magenta",
    "cyan",
    "blue",
    "black",
    "gray",
    "teal",
    "green",
    "purple",
    "violet",
  ];
  // ===== CHALLENGE =====
  // 1. Create A Function (generate)
  // Function should get a random color from the COLORS_ARRAY
  // Create a li element
  // Add the color name to the li text
  // Set the background color of the li to the random color
  // Append the li to the ul
  const listParent = document.querySelector('#color-list')
  const btn1 = document.querySelector('#generate-color')
  const btn2 = document.querySelector('#remove')
  const list = document.createElement('li')


    const generate = () => {
   let num = Math.floor(Math.random()*COLORS_ARRAY.length) 
   list.textContent =  COLORS_ARRAY[num]

    list.style.backgroundColor = COLORS_ARRAY[num]
    listParent.appendChild(list) 
    
  }

  btn1.addEventListener('click', generate)
 

  // 2. Create Function (reset)
  // Should remove all li children from the ul. 
  // Should set background color to white

  const reset = () => {
    while(listParent.firstChild) {
      listParent.removeChild(listParent.lastChild);
  
      }
  
  }

  btn2.addEventListener('click',  reset)
 