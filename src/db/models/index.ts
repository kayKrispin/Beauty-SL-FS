import dotenv from 'dotenv';

const fs = require(`fs`);
const path = require(`path`);
const Sequelize = require(`sequelize`);

dotenv.config({ path: `.env.local` });

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const db: { [key: string]: any } = {};

let sequelize: typeof Sequelize = {};

if (env) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);

} else {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
}

fs.readdirSync(__dirname)
  .filter(
    (file: any) =>
      file.indexOf(`.`) !== 0 && file !== basename && file.slice(-3) === `.ts`,
  )
  .forEach((file: any) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
