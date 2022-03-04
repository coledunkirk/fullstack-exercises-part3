const mongoose = require('mongoose')

if (process.argv.length < 5 && process.argv.length !== 3) {
  console.log(
    'Please provide the password, name, and number as arguments: node mongo.js <password> <name> <number>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://coledunkirk:${password}@cluster0.2hmvb.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const numberSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Number = mongoose.model('Number', numberSchema)

if (process.argv.length === 3) {
  return Number.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(num => {
      console.log(num.name, num.number)
    })
    mongoose.connection.close()
  })
}

const note = new Number({
  name: process.argv[3],
  number: process.argv[4],
})

note.save().then(result => {
  console.log(`added ${note.name} number ${note.number} to phonebook`)
  mongoose.connection.close()
})
