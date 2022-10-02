// load modules
const express = require('express')

// init express app
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send( "99 Bottles of beer on the wall <a href= '/98'> take one down, pass it around</a>"
    )
})

app.get('/:number_of_bottles', (req, res) => {
   const {number_of_bottles} = req.params;

    res.send(`${number_of_bottles} Bottles of beer on the wall. <a href= '/${number_of_bottles - 1}' > Take one down, pass it around</a>`)
   
})

 app.get('/fibonnaci/:n', (req, res) => {
    const {n} = req.params;

    res.send( checkfibonacci(n))
 })

function checkfibonacci(n){
    let a = 0;
    let b = 1;
    if (n==a || n==b) return true;
    let c = a+b;
    while(c<=n)
    {
        if(c == n) return "Very good, It is Fibonacci";
        a = b;
        b = c;
        c = a + b;
    }
    return "I can tell this is not a fibonacci number";
}
      

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})