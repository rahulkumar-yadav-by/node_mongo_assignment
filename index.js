// first import express, mongoose and routes
const express = require("express")
const mongoose = require("mongoose")

// get the routes for learner and courses
const routes_learner = require("./routes/LearnersRoutes")
const routes_course = require("./routes/CoursesRoutes")

// initialize express app
const app = express()

// creating server at port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000")
})

app.use(express.json())

// default route
app.use("/welcome", (req,res) => {
    res.send("I am Groot")
})

// add the routes
app.use("/learners", routes_learner)
app.use("/courses", routes_course)





// connecting to database
const uri = "mongodb+srv://Rahul101:DatabaseRy123@cluster0.1ctcqzj.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser:true}).
        then(() => {console.log("Database Connected")}).
        catch((error) => {console.log(error)})

