import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './graphql';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(cors('*'));
dotenv.config();

mongoose.connect(process.env.MONGO_DB);

const db = mongoose.connection
db.on('error', () => console.log('Failed to connect to DB.'))
	.once('open', () => console.log('Connected to DB. '))

app.get('/', (req, res) => {
  res.send('Welcome to our amazing store!');
});

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(process.env.PORT, () => {
  console.log('GraphQL server running at port ', process.env.PORT ,'...')
})