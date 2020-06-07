module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define("address", {
      address: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      }
    });
  
    return Address;
  };