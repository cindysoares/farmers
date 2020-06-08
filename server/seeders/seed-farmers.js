module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert('farmers', 
      [
        {
            name: 'Farmer 123',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Farmer 456',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'XYZ',
            createdAt: new Date(),
            updatedAt: new Date()
        }
      ], {}),
  
    down: (queryInterface) => queryInterface.bulkDelete('farmers', null, {}),
  };