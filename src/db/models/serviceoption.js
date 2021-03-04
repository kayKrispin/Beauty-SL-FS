'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServiceOption = sequelize.define(
    'ServiceOption',
    {
      label: DataTypes.STRING,
      timeToComplete: DataTypes.STRING,
    },
    {},
  );
  ServiceOption.associate = function (models) {
    // associations can be defined here
  };
  return ServiceOption;
};
