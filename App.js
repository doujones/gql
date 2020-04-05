// express server begins
const express = require('express')
const graphqlHTTP = require('express-graphql')


const app = express();

app.use('/graphql', graphqlHTTP({
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Listening for signal');
})
// express server ends
// npm install express-graphql graphql

