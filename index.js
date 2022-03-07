require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/number')
const app = express()
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan('tiny', {
  skip: (req) => req.method === 'POST'
}))
morgan.token('data', (req) => {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data', {
  skip: (req) => req.method !== 'POST'
}))

app.get('/info', (request, response) => {
  Person.find({}).then(people => {
    response 
      .send(`<div>Phonebook has info for ${people.length} people</div>
          <div>${new Date()}</div>`)
  })
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body;

  (async function getPeople() {
    const people = await Person.find({})
    const found = people.find(person => person.name.toLowerCase() === body.name.toLowerCase())
    if (found) {
      return response.status(400).json({ 
        error: 'This person is already added to the phonebook' 
      })
    }
    const person = new Person({
      name: body.name,
      number: body.number,
    })
  
    person.save()
      .then(result => {
        response.json(result)
      })
      .catch(error => next(error))
  })()
})

app.put('/api/persons/:id', (request, response, next) => {
  const { name, number } = request.body

  Person.findByIdAndUpdate(
    request.params.id, 
    { name, number }, 
    { new: true, runValidators: true, context: 'query' },
  )
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})