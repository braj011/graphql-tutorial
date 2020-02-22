const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@graphql-tutorial-owtdb.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
)
mongoose.connection.once('open', () => {
  console.log('connected to the Mongo db')
})

app.use(
  '/graphql',
  graphqlHTTP({
    // This middleware function takes the schema
    schema,
    graphiql: true
  })
)

app.listen(4000, () => {
  console.log('now listening for requests on port 4000')
})
