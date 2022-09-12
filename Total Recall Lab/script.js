/*   Q + A
1. we assign variables using key words such as const/let/var
2. By reassigning it to a different value
3. new variable  = previous variable 
4. declare is to set a datatype and value to a variable while assign is to set it to a particular value and define applies to functions
5. is a plain language description of the steps in an algorithm or another system.
6. 80% 20%
*/

/*      Strings    */
let firstVariable = "Hello World"
firstVariable = 2

secondVariable = firstVariable 
secondVariable =  "Hello again"

console.log(firstVariable)
let yourName = "Edil"
console.log(`Hello, my name is ${yourName}`)

/*      Booleans   */
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c> d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);

  console.log(false || false|| false || false || false  ||true);
  console.log(false === false)
  console.log(e  === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  /*      Farm   */
  let animal = "cow"

  if (animal === "cow"){
    console.log("mooooo")
  }else{
    console.log("Hey! You're not a cow.")
  }

   /*      Driver's Ed  */

   let age = 40
   if (age >= 16){
    console.log("Here are the keys!")
  }else{
    console.log("Sorry, you're too young.")
  }



  /*      Loops   */


for (let i =0; i <= 10 ; i++){
    console.log(i)
}
for (let i =10; i <= 400 ; i++){
    console.log(i)
}
for (let i =20; i < 4000 ; i += 3){
    console.log(i)
}
//get even

for (let i =0; i > 100 ; i++){
    if(x % 2 === 0){
        console.log(`${x} <-- is an even number`)
    }else{
        console.log(x)
    }
}
// multiple of five

for (let i =0; i > 100 ; i++){
if(x % 5 === 0){
    console.log(`I found a ${x}. High five!`)
}else if (x % 3 === 0){
    console.log(`I found a ${x}. Three is a crowd`)
}
else{
    console.log(x)
}
}
//saving account 
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let sum = 0;

for (let i = 1; i <= 10; i++){
    sum = sum + i 
   
}
console.log(sum)

for (let i = 1; i <= 100; i++){
 
    sum = sum + i*2 
   
}
console.log(sum)

/* 
Arrays & Control flow
1.index
2.No
3.bag full of items 
*/

const  quotes = ["quote1", "quote2", "quote3"]
const randomThings = [1, 10, "Hello", true]
randomThings[2] = "world"
console.log(randomThings)

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[4] = "Octocat"
ourClass.push("Cloud City")
console.log(ourClass)

const myArray = [5, 10, 500, 20]
myArray.push( "Aegon", 4)

myArray.splice(0,1)
myArray.unshift("Bob Marley")
myArray.pop()
myArray.reverse()// this will change the position of the index meaning it mutate the array
console.log(myArray)

//Biggie smalls ????
let q = 0
if(q < 100){
    console.log("little number")
}else{
    console.log("big number")
}

//monkey in the middle 

let num = 7
if(num < 5){
    console.log("little number")
}else if( num > 10){
    console.log("big number")
}else{
    console.log("monkey")
}

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  console.log( "Kristyn is rocking that " + kristynsCloset[4] + " today!")
  kristynsCloset.splice(6, 0,"raybans")
  console.log(kristynsCloset)
  kristynsCloset.splice(5,1,"stained knit hat")
  console.log(kristynsCloset)
//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
  console.log(`Thom is looking fierce in a ${thomsCloset[0][1]},${thomsCloset[1][1]} and ${thomsCloset[2][1]} `)
 thomsCloset[1][2] = "Footie Pajamas"


 // Functions 
 function printGreeting(name){
    return (`Hello there, ${name}!`)
 }
 console.log(printGreeting("Slimer"));
 

 function printCool(name){
    return (`${name} is cool`)
 }
 console.log(printCool("Captain Reynolds"));

 function calculateCube(y){
    return y*y*y
 }
 console.log(calculateCube(5));
  
//  Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want. 

 function isVowel(l){
    const vowels = ["a","e","i","o","u"]
    l = l.toLowerCase()
    if(l.length === 1){
       return  vowels.includes(l)
       }else{
       console.log("string is too long")
       return false
    }
 }
 console.log(isVowel("A"));

  let strCount = []
  function getTwoLengths(string1, string2){
    strCount.push(string1.length , string2.length)
    return strCount
  }

  console.log(getTwoLengths("Hank", "Hippopopalous"));

  //getMultipleLengths

  function getMultipleLengths (array) {
    let arrCount = []
    let temp = "";
    for (let i = 0; i < array.length; i++){
            temp = array[i]; 
           // console.log(temp) 
            arrCount.push(temp.length)
    }
        return arrCount
  
}
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); 

function maxOfThree(a,b,c){
    if(a >= b >= c){
        return a
    }
    else if( a <= b >= c){
        return b
    }else{
        return c
    }
}
console.log(maxOfThree(9, 9, 1));

function printLongestWord(array){
    let temp = array[0];
    for (let i = 1; i < array.length; i++){
        if(temp.length <  array[i].length ){
            temp = array[i]
        }
        }
        return temp
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

const user = {
    name: "customer1",
    email: "customer1@gmail.com",
    age: 30,
    purchased: []
}
user["email"] = "custNewEmail@gmail.com"
//Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
//  let userage = user["age"] 
//  user["age"] =  userage++  
 user.age++
console.log(user)

user["location"] = "United States"
user["purchased"].push("carbohydrates", "peace of mind", "Merino jodhpurs") 
user["purchased"][2]

console.log(user)
console.log(user["purchased"][2])

user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "United States",
    Purchased: []
}

console.log(user.friend["name"])
console.log(user.friend["location"])

user.friend["age"] = 55
user.friend.Purchased.push("The One Ring", "A latte" )
console.log(user)
console.log(user.friend.Purchased[1])

user["purchased"].forEach( (i) => {
     console.log(i)
  })

user.friend.Purchased.forEach( (i) => {
    console.log(i)
 })


//  Functions



function updateUser(){
    //user["age"] = user["age"] + 1 
    user["name"] = user["name"].toUpperCase()
}
updateUser()
console.log(user)
//  apply map 
// for(let [key, value] of Object.entries(user)){
//     console.log(key, value)
// }

const oldAndLoud = (person) => {
       person["age"] = person["age"] + 1 
}
oldAndLoud(user)

user.purchased.map((item)=>{
    console.log(item)
})
const cat1 = {
    name : "Oscar",
    breed : "American Shorthair",
    age: 5
}

console.log(cat1["age"])
console.log(cat1["breed"])

const cat2 = {
    name : "Lucky",
    breed : "American curl",
    age: 7
}
const combineCats = (mama, papa) => {
    console.log(mama , papa)
} 
//This is to demonstrate that a function can return an object
combineCats(cat1, cat2)

