import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import cors from 'cors';
import indexRouter from './src/db/routes';

import pg from 'pg';

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 8000;
const app = next({ dev, quiet: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const conString = process.env.DATABASE_URL; // Can be found in the Details page
  const client = new pg.Client(conString);
  client.connect((err) => {
    if (err) {
      return console.error(`could not connect to postgres`, err);
    }
    client.query(`SELECT NOW() AS "theTime"`, (err, result) => {
      if (err) {
        return console.error(`error running query`, err);
      }
      console.log(`db connected`);
      // >> output: 2018-08-23T14:02:57.117Z
      client.end();
    });
  });

  server.use(cors({ credentials: true, origin: true }));
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  );

  server.use('/api', indexRouter);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Running on localhost:${port}`);
  });
});
