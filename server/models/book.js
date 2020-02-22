const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  // mongo creates the id for books automatically - autoincrementing
  name: String,
  genre: String,
  authorId: String
})

// the model is akin  to a collection in  the database
module.exports = mongoose.model('Book', bookSchema)
