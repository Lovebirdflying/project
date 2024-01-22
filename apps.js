
require('./DB/connect')
const express = require('express')
const app = express()
const task = require('./routes/task')
const connectDB = require('./DB/connect')
require('dotenv').config()
const notFound = require('./middleware/notfound')
const errorHandlerMiddleware = require('./middleware/errorhandler')
//middleware

app.use(express.json())
//routes

app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/task', task)

app.use(notFound)
app.use(errorHandlerMiddleware)
const port = 2000

const start =async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}

start()