const express = require('express');
const app = express()

app.use(express.json())
app.use('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to iRepoter"
  })
})

app.use((req,res,next)=>{
  const error = new Error('Not found');
  error.status = 404;
  next(error)
})

app.use((error,req,res,next)=>{
  res.status(error.status||500);
  res.json({
    error:{
      message:error.message
    }
  })
})

module.exports = app;