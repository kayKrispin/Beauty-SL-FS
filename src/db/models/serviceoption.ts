import { DataTypes, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const ServiceOption = sequelize.define(
    `ServiceOption`,
    {
      label: DataTypes.STRING,
      timeToComplete: DataTypes.STRING,
    },
    {},
  );
  return ServiceOption;
};
