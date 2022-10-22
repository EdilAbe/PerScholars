const express = require('express')
const app = express()
const pokemonSchema = require("./models/pokemonSchema")
const pokemon = require('./models/pokemon');
const PORT = 3000
const mongoose = require("mongoose");
const methodOverride = require('method-override');
require("dotenv").config();


app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'jsx'); 
app.engine('jsx', require('express-react-views').createEngine()); 

app.use(methodOverride('_method'))

// Routes
app.get('/', (req, res)=> {
    pokemonSchema.find({}, (error, Pokemon) => {
        if (error) {
            console.log(error)
        }
        console.log(Pokemon)
            res.render('Index.jsx', {pokemon: Pokemon})
});
})

app.get('/pokemon', (req, res) => {
    pokemonSchema.find({}, function (error, Pokemon) {
            if (error) {
                console.log(error);
            }
            console.log(Pokemon);
            res.render('Index.jsx' , {pokemon: Pokemon});
        })

    
})


app.post("/pokemon", (req, res) => {
    pokemonSchema.create(req.body, (error, newPokemon) =>{
    if (error){
        console.log(error);
    }
    res.redirect("/pokemon");
})
});



app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

//Individual route
app.get("/pokemon/:id", (req, res) => {
    const { id } = req.params;
  
    // get the dat from the db
   Pokemon.findById(id, (error, newPokemon) => {
      if (error){
          console.log(error);
          res.status(403).send('Id not found')
      }
      // send the view with the data found on the db
      res.render("Show", {
         Pokemon: newPokemon
          
        });
    })
  
  });


  
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      mongoose.connection.once("open", () => {
        console.log("connected to mongo");
      });
})