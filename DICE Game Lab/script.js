 //================ Task 1 ==============================
        // Create a function (rollDice)
        // Roll Two "dice" one for the player and one for the computer
        // Use one variables for the (player) and one for the (computer)
        // (use a random number from 1-6 to represent a dice)
         // If the player's dice roll is higher than the computer dice roll,
        // console.log("PLAYER WINS")
        // otherwise, log ("COMPUTER WINS")
        // Use a ternary to check for the winner
        // ----- After testing it, remove the console.log()
        // leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
        // FINALLY: return all three variables using an array
        // return [VALUE1, VALUE2, VALUE3]
        const parent = document.querySelector('#winner')
        console.log(parent)
        const playbtn = document.getElementById("play-game")
        const resetbtn = document.getElementById("reset")
      

        

        const rollDice = () =>{
            let player =  Math.ceil(Math.random()*6)
            let computer = Math.ceil(Math.random()*6)
            //console.log(computer) 

           let  winner  =  player === computer ? "It's a tie" :( (player > computer) ? "player wins" : "computer wins")
           let result =[player , computer, winner]
           return result
               
        }
              

      // ============ Task 2 ==============================
      // Let's update our UI (User Interface)
      // Create a function (displayScore)
      // Create a new a div displaying:
      // Computer Score: , Player Score:  & the Winner:
      // so there is a running record of game data.
      // Append the new div to the parent div on the HTML.


      const displayScore = () => {
        const winnerDiv = document.createElement('div')
        const computerDiv = document.createElement('div')
        const playerDiv = document.createElement('div')
        parent.appendChild(playerDiv) 
        parent.appendChild(computerDiv) 
        parent.appendChild(winnerDiv) 
        const values = rollDice()

        const diceImage = 'assets/dice' + values[0] + '.png'
        document.querySelector('img').setAttribute('src', diceImage)
        

        playerDiv.textContent =  `player value: ${values[0]}`
        computerDiv.textContent =  `computer value: ${values[1]}`
        winnerDiv.textContent = values[2]

        return winnerDiv , playerDiv , computerDiv
      }


      
      // Create a Reset Function (resetGame)
      // REMOVE the div with the game score, leaving just the parent div
      // creating a clean slate for a new set of games :)
       const resetGame = () =>{
              
            for(let i = 0; i < parent.children.length ; i ++ ){
                parent.removeChild(parent.lastChild);
        }
        
       }

       resetbtn.addEventListener("click", resetGame)

      // ==== Final Step =====================
      // Create a new function (playGame):
      // Call the rollDice and the displayScore function inside this function
        playGame= ()=> {
            return displayScore() , rollDice()
        }

        playbtn.addEventListener("click",playGame)

      // ========= Don't forget to add your events listeners
      // Attach the (playGame) function to the play game button
      // Attach the (resetGame) function to the reset button

      // ===== Now let's host this game in GITHUB PAGES and style it !!!