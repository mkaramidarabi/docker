const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    res.send('how you doin')
})

app.listen(8080, () => {
    console.log('listing on port 8080')
})