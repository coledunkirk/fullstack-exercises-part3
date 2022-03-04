const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
.then(result => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connecting to MongoDB:', error.message)
})

function validateParts(p1, p2) {
  return !isNaN(Number(p1)) && !isNaN(Number(p2)) && p1.length < 4 && p1.length > 1
}

function validator(val) {
  if (val.includes('-')) {
    const index = val.indexOf('-')
    const firstPart = val.slice(0, index)
    const secondPart = val.slice(index + 1)
    return validateParts(firstPart, secondPart)
  } else {
    return !isNaN(Number(val))
  }
}

const numberSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    minLength: 8,
    required: true,
    validate: validator,
  },
})

numberSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', numberSchema)