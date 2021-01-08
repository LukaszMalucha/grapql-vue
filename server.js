const  { ApolloServer, AuthenticationError } = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');



// Import typeDefs and resolvers
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf8');
const resolvers = require('./resolvers');

// Import Env variables and Mongoose models
require('dotenv').config({ path: 'variables.env'});
const User = require('./models/User');
const Post = require('./models/Post');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,useUnifiedTopology: true } )
.then(() => console.log('DB connected'))
.catch(err => console.error(err));

// Verifying JWT Token passed from client
const getUser = async token => {
  if (token) {
    try {
      return  await jwt.verify(token, process.env.SECRET);
    } catch (err) {
      throw new AuthenticationError('Your session has ended. Please log in again.')
    }
  }
}

// Create Apollo GraphQL Server and wire it with typeDefs, resolvers and context objects
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers['authorization'];
    return {User, Post, currentUser: await getUser(token)};
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listen on ${url}`);

});


