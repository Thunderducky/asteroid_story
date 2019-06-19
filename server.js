const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('client/public'))

app.listen(PORT, () => { console.log(`Your escape starts on PORT # ${PORT}`)})

