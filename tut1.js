require('dotenv').config()
const express = require('express')// importing express module as express object
const app = express()// creating express object as app it is just like math.random() function in javascript
const port = 4000 // 4000 is the port number on which the server will run you can change it to any other port number

app.get('/', (req, res) => {// get method is used to get the request from the client and send method is used to send the response
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
  res.send('<h1>Login Page you can also send html</h1>')
})
app.get('/twitter',(req,res)=>{
  res.send('this is twitter page')//req->request res->response
})
app.listen(process.env.PORT, () => {// this is the function which will run the server on the port number
  console.log(`Example app listening on port ${port}`)
})

