module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.addColumn('Services', 'isAdmin', {
        type: Sequelize.BOOLEAN,
      }),
    ]),

  down: (queryInterface, Sequelize) =>
    Promise.all([queryInterface.removeColumn('Services', 'isAdmin')]),
};
