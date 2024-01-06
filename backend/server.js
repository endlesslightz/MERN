require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//aplikasi express
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    //catat log
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen request port
        app.listen(process.env.PORT, () => {
            console.log('Terhubung dengan DB dan Berjalan pada port 4000!!')
        })
    })
    .catch((error) => {
        console.log(error)
    })




