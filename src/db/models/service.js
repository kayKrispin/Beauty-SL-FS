'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    'Service',
    {
      email: DataTypes.STRING,
      instagramName: DataTypes.STRING,
      phone: DataTypes.STRING,
      service: DataTypes.STRING,
      date: DataTypes.STRING,
    },
    {},
  );
  Service.associate = function (models) {
    // associations can be defined here
  };
  return Service;
};
