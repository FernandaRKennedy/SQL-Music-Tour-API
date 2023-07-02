// DEPENDENCIES
const express = require('express')	
const app = express()
const { Sequelize } = require("sequelize");


// CONFIGURATION / MIDDLEWARE	// CONFIGURATION / MIDDLEWARE
require('dotenv').config()	
app.use(express.json())	
app.use(express.urlencoded({ extended: false }))	

// ROOT	// ROOT
app.get('/', (req, res) => {	
    res.status(200).json({	  
        message: 'Welcome to the Tour API'	   
    })	  })
// CONTROLLERS
const bandsController = require("./controllers/bands_controller");
app.use("/bands", bandsController);
const eventsController = require("./controllers/events_controller");
app.use("/events", eventsController);
const stagesConrtoller = require("./controllers/stages_controllers");
app.use("/stages", stagesConrtoller);

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize({
//     storage: process.env.PG_URI,
//     dialect: 'postgres',
//     username: 'postgres',
//     password: 'password'
//   })

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)

// try {
//     sequelize.authenticate()
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`)
// }

//listen
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: 
    ${process.env.PORT}`);
  }
)