const https = require('https')
const express = require('express')
const app = express()

const fs = require('fs')

const PORT = 3000

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello, node!'
  })
})

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}

https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`listening to port ${PORT}. press ctrl + c to cancel`)
})
