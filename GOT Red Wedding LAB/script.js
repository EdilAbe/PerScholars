// Create Two Functions -> addChild and redWedding
const parentDiv = document.querySelector('.starks')

function addChild() {
    const div = document.createElement('div')
    div.textContent = "new div"
    parentDiv.appendChild(div)

}
console.dir(parentDiv)
console.dir(parentDiv.children)
console.dir(parentDiv.childNodes)
const redWedding = () => {
     
    // while(parentDiv.firstChild) {
    //     parentDiv.removeChild(parentDiv.lastChild);

    // }
    // console.log(parentDiv)
    for(div in parentDiv){
        parentDiv.removeChild(parentDiv.lastElementChild)
        
    }

//     for(let i = 0; i < parentDiv.children.length ; i ++ ){
//         parentDiv.removeChild(parentDiv.lastChild);
// }

}
// Attach functions to buttons
const btn1  = document.getElementById('add-child')
const btn2  = document.getElementById('red-wedding')

btn1.addEventListener('click', addChild)
btn2.addEventListener('click',redWedding)

// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)

