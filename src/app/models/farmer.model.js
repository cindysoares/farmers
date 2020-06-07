module.exports = (sequelize, Sequelize) => {
    const Farmer = sequelize.define("farmer", {
      id: {
          type: Sequelize.STRING
      }/*,
      document: {
          type: Sequelize.document
      }*/,
      name: {
          type: Sequelize.STRING
      }/*,
      address: {
          type: Sequelize.address
      }*/
    });
  
    return Farmer;
  };