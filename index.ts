import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import next from 'next';
import indexRouter from './src/db/routes/service';

const dev = process.env.NODE_ENV !== `production`;
const port = parseInt(process.env.PORT as string, 10) || 3000;
const app = next({ dev, quiet: false });
const handle = app.getRequestHandler();

const { dbConnect } = require(`./src/db/dbConnect`);

const server = express();

// Server for testing
dbConnect();

server.use(cors({ credentials: true, origin: true }));
server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

server.get(`/`, (req, res) => {
  res.json({ test: `test` });
});

server.use(`/api`, indexRouter);

// Return all requests to nexts js frontend
server.all(`*`, (req, res) => handle(req, res));

const customServer = server.listen(port, () => {
  console.log(`Running on localhost:${port}`);
});

module.exports = customServer;
