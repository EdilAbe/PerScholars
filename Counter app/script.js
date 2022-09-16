// const body = document.querySelector('body')

// const reset = () => {
//     console.log("clicked button")
// }


// const randNum = () => {
//     console.log(Math.floor(Math.random()*255))
// }

// //DOM 

// const btn = document.getElementsById("reset-btn")
// btn.onclick = reset;
// btn.onclick = randNum;


// //DOM Method 

// const btn2 = document.querySelector('#reset-btn-2')

// btn2.addEventListener("click", reset)

// //function with no name

// btn2.addEventListener('click', function(){
//     console.log("third function")
// })

// btn2.addEventListener('click', function(){
// body.style.backgroundColor= "blue"
// })


//1. Create a new variable called 'total' and assign it the div with the id of 'total'
        

const total = document.getElementById("total")
let totalNum =  Number(total.textContent)


//2. Create Six Functions (add, subtract, multiplyBy2, divideby5, multiplyBy5, divideBy5)
        // Example:


const add = () => {
    total.textContent =  Number(total.textContent) + 1
    console.log("total",  totalNum)
   // window.alert("Add number")
  
}
const subtract = () =>{
    total.textContent =  totalNum  - 1
    console.log("subtract",  totalNum)
    //window.alert("Subtract number")

}

const multiplyBy2= () =>{
    total.textContent = totalNum * 2  
    console.log( totalNum)
   // window.alert("Multiply number by 2")
}

const divideBy2 = () =>{
    total.textContent =  totalNum / 2  
    console.log( totalNum)
  //  window.alert("Divide number by 2")
}
const multiplyBy5 = () =>{
    total.textContent =  totalNum * 5  
    console.log( totalNum)
  //  window.alert("Multiply number by 5")
}
const divideBy5 = () =>{
    total.textContent =  totalNum / 5  
    console.log( totalNum)
   // window.alert("Divide number by 5")
}
        //3. Attach Functions to Buttons

const addBtn = document.querySelector("#add")
const subBtn = document.querySelector("#subtract")
const multBtn2 = document.querySelector("#mult-2")
const divBtn2 = document.querySelector("#div-2")
const multBtn5 = document.querySelector("#mult-5")
const divBtn5 = document.querySelector("#div-5")


addBtn.addEventListener('click', add)
subBtn.addEventListener('click',subtract)
multBtn2.addEventListener('click', multiplyBy2)
divBtn5.addEventListener('click', divideBy2)
multBtn5.addEventListener('click', multiplyBy5)
divBtn5.addEventListener('click', divideBy5)