const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

// Espress HSB
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'angel',
  })

  // res.send('Hola mundo')
})

app.get('/about', (req, res) => {
  res.render('about')

  // res.send('Hola mundo')
})

app.listen(port, () => {
  console.log(`Escuchando desde el puerto ${port}`)
})