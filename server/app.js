const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors'); //get requests from different servers

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to mLab DB:
mongoose.connect('mongodb://moran:test123@ds111765.mlab.com:11765/gql-ninja')
mongoose.connection.once('open', () => {
  console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
app.listen (4000, () => {
  console.log('now listening for requests on port 4000');
})
