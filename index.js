require('dotenv').config()      // env required
const express = require('express')
const app = express()           // our app is using express server
const port = 3300
app.get('/',(req,res) => {      // on receiving request from client url, we will send a the following response to the client
    res.send('Hello world!')
})
app.get('/twitter',(req,res)=> {
    res.send('Himanshudotcom')
})
app.get('/login',(req,res) => {
    res.send('<h1>Please Login</h1>');
})
app.listen(process.env.PORT,() => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})