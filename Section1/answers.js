////////////////////////////////
// Easy Going
////////////////////////////////
// for (let i = 0; i <= 20; i++) {
//     console.log( i);
//   }

////////////////////////////////
// Get Even
////////////////////////////////
// for (let i = 0; i <= 200; i+= 2 ) {
//       console.log( i);
//   }

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(i=1; i<=100 ;i++)
{
    if(i%5==0 && i%3==0)
    {
        console.log("FizzBuzz")
    }
    else if(i%3==0)
    {
        console.log("Fizz")
    }
    else if(i%5==0)
    {
        console.log("Buzz")
    }
    else
    {
        console.log(i)
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee.splice(2,1, 5001)
console.log(plantee)

wolfy.splice(3,1, "Gotham City")
console.log(wolfy)

dart.push("Hawkins")
console.log(dart)

wolfy.unshift("Gameboy")
console.log(wolfy)


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (names of ninjaTurtles) {
    console.log(names.toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'))
favMovies.sort()
console.log(favMovies)

favMovies.pop()
favMovies.push("Guardians of th Galaxy")

favMovies.reverse()

favMovies.shift()
favMovies.unshift("Guardians of th Galaxy")

console.log(favMovies.indexOf('Django Unchained'))
favMovies.splice(15,1, "Avatar")

console.log(favMovies.length)
const remainingArray = favMovies.slice(9,18)

console.log(favMovies)
console.log(favMovies.indexOf("Fast and Furious"))

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1)

whereIsWaldo[1].splice(2,1,"No One")

console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////
const kittenTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
let meow = Math.floor(Math.random()*3);
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(kittenTalk[meow]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}

////////////////////////////////
//  Find the Median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort() 

Math.floor(nums.length/2)
console.log(nums.slice(12,13))
////////////////////////////////s


////////////////////////////////
// Hungry for More
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


  let kristynsShoe = kristynsCloset[0]
  kristynsCloset.shift()
  console.log( kristynsCloset)


  thomsCloset.push(kristynsShoe)
  console.log(thomsCloset)

  let Outfit1 = `Kristyns will be wearing ${kristynsCloset[1]}, ${kristynsCloset[3]} and ${kristynsCloset[4]} tonight.`
  console.log(Outfit1)

  let Outfit2 = `Thoms favorite items from his closet are his  ${thomsCloset[1][1]}, and his ${thomsCloset[2][2]}.`
  console.log(Outfit2)

  let Outfit3 = `Thoms went inside to change his outfit to ${thomsCloset[0][0]} and  ${thomsCloset[1][1]}.`
  console.log(Outfit3)
  
  
for (let i = 0; i < kristynsCloset.length; i++) {
    const item = kristynsCloset[i];
    console.log(`WHIRR: Now washing ${item}`)
}

console.log(`Thoms has ${thomsCloset[0].length} shirts, ${thomsCloset[1].length} pants, ${thomsCloset[2].length} accessories.`)

////////////////////////////////