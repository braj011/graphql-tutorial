const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
  // mongo creates the id for books automatically - autoincrementing
  name: String,
  age: Number,
  bookId: String
})

// the model is akin  to a collection in  the database
module.exports = mongoose.model('Author', authorSchema)
