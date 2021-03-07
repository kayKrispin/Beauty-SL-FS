import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import cors from 'cors';
import indexRouter from './src/db/routes/service';

const { dbConnect } = require('./src/db/dbConnect');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev, quiet: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Setup custom node server
  const server = express();

  // Connect to elephantsql
  dbConnect();

  server.use(cors({ credentials: true, origin: true }));
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  );

  server.use('/api', indexRouter);

  // Return all requests to nexts js frontend
  server.all('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Running on localhost:${port}`);
  });
});
