module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.addColumn('Services', 'time', {
        type: Sequelize.STRING,
      }),
    ]),

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.removeColumn('Services', 'time')]),
};
