// load modules
const express = require('express')

// init express app
const app = express()
const PORT = 3000



// Routes
app.get('/greeting', (req, res) => {
    res.send(`Hello, stranger`)
})


app.get('/greeting/:Name', (req, res) => {
   const { Name } = req.params;
    res.send(`Hello, ${Name}. It's so great to see you!`)
})


app.get('/tip/:total/:tipPercentage', (req, res) => {
    const {total, tipPercentage} = req.params;
    res.send(`${tipPercentage}`)
})

const answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    response =  Math.floor(Math.random()*23)
    console.log("rand number", response)
    res.send(`<h1> ${answer[response]} </h1>`)
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})