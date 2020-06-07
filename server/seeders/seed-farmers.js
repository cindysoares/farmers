module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert('farmer', 
      [
        {
            name: 'Farmer 123'
        },
        {
            name: 'Farmer 456'
        },
        {
            name: 'XYZ'
        }
      ], {}),
  
    down: (queryInterface) => queryInterface.bulkDelete('farmer', null, {}),
  };