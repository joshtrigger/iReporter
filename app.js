const express = require('express');
const app = express()

app.use(express.json())
app.use('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to iRepoter"
  })
})

module.exports = app;