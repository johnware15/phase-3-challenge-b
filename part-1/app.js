const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = 3000

const jsonParser = bodyParser.json()

const app = express()

app.use(morgan('combined'))

app.get('/api/days/:day', (req, res) => {
  let day = req.params.toLowerCase()
  let daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  }
  !daysOfWeek[day] ?
  res.status(400).send(`response: No making up days. This '${day}' is make believe!`) :
  res.status(200)
    .set('Content-Type', 'text/plain')
    .send(`response: ${daysOfWeek[day]}`)
})


//////////////////////////////////////////////////////////////////////////////////////

app.post('/api/array/concat', jsonParser, (req, res) => {
  let array1 = req.body.array1
  let array2 = req.bo
})
