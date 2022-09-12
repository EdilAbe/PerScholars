class Person{
    constructor(name, age , eyeColor){
        this.name = name
        this.age = age
        this.eyeColor = eyeColor
    }
    greet(name){
        console.log(`Hello, my name is ${name}!`);
    }
    birthday(){
        this.age += 1
    }
    setHair(hairColor){
        this.hair = hairColor
    }
}

class PostalWorker extends Person{
    constructor(name, age, eyeColor){
        super(name, age, eyeColor)
        this.workSchedule = ["Monday","Wednesday", "Friday"]
    }
    frontDesk(){
        console.log(`Thanks for calling USPs, ${this.name} speaking. How can I help you?`)
        }
}


class Chef extends Person{
    constructor(name,  age, eyeColor){
        super(name,  age, eyeColor)
        this.menu = ['Chicken Sandwich', 'Fries', 'Pizza']
    }
    cook(){
        console.log(`${this.menu[2]} is coming up next`)
        
    }

}


//Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

const chef1 = new Chef("Chef Ramsay", 34,"blue")
const chef2 = new Chef("Chef Brook", 45, "black")

const worker1 = new PostalWorker("William", 23, "black")
const worker2 = new PostalWorker("wilson", 34, "blue")

// chef1.cook()
// worker1.frontDesk()
// worker2.frontDesk()


class BankAccount{
    constructor(ownerName, balance, ){
        this.ownerName = ownerName
        this.balance = balance
        this.acctNum = Math.floor(Math.random()*10000000)
    }
    
    deposit(amount){
        return this.balance += amount
    }
    withdraw(amount){ 
        if(amount > this.balance){
        this.balance = this.balance - amount
        console.log(this.balance)
        }else{
            console.log("You have insufficient balance")
        }
    }
}

class CheckingAccount extends BankAccount{

    withdraw(amount){
        super.withdraw()
        return this.balance = this.balance - amount

}
}

class SavingsAccount extends BankAccount{
    withdraw(){
        super.withdraw()
        return(`You are unauthorized to withdraw. you remaining balance is ${this.balance}`)
        
    }
}

const account1 = new CheckingAccount ('Edil', 3200)
const account2 = new SavingsAccount ('Edil', 900)

console.log(account1)
console.log(account2)

account1.deposit(300)
account1.withdraw(400)
account2.withdraw(400)