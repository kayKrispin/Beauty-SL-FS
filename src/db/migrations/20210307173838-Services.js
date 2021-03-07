module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.addColumn('Services', 'isAccepted', {
        type: Sequelize.BOOLEAN,
      }),
    ]),

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.removeColumn('Services', 'isAccepted')]),
};
