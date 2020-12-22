const  { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


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


// Create Apollo GraphQL Server and wire it with typeDefs, resolvers and context objects
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listen on ${url}`);

});


