// external imports
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const cookieParser = require('cookie-parser')

// internal exports
const {notFoundHandler, errorHandler} = require('./middleware/common/errorHandler')
const loginRouter = require('./router/loginRouter')
const inboxRouter = require('./router/inboxRouter')
const usersRouter = require('./router/usersRouter')

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.fltsf.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`

// mongoose connect
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('db connected'))
    .catch(err => console.log(err))

// set view engine
app.set('view engine', 'ejs')

// set static folder
app.use(express.static(path.join(__dirname,'public')))

// parser cookies
app.use(cookieParser(process.env.COOKIE_SECRET))

// routing setup
app.use('/', loginRouter)
app.use('/users', usersRouter)
app.use('/inbox', inboxRouter)

// 404 not found handler
app.use(notFoundHandler)

// common error
app.use(errorHandler)

// app listen 
app.listen(process.env.PORT, () => {
    console.log(`app listenning on port ${process.env.PORT}`)
})