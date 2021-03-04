import pgConnect from 'pg';

const conString = process.env.DATABASE_URL;

export function dbConnect() {
  const client = new pgConnect.Client(conString);

  client.connect((err) => {
    if (err) {
      return console.error(`could not connect to postgres`, err);
    }
    client.query(`SELECT NOW() AS "theTime"`, (er) => {
      if (err) {
        return console.error(`error running query`, er);
      }
      console.log(`db connected`);
      client.end();
      return null;
    });

    return null;
  });
}
