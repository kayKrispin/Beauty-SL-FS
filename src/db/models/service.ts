import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const Service = sequelize.define(
    `Service`,
    {
      email: DataTypes.STRING,
      instagramName: DataTypes.STRING,
      phone: DataTypes.STRING,
      service: DataTypes.STRING,
      date: DataTypes.STRING,
      time: DataTypes.STRING,
      isAccepted: DataTypes.BOOLEAN,
      isAdmin: DataTypes.BOOLEAN,
    },
    {},
  );
  return Service;
};
