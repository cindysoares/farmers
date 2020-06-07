module.exports = (sequelize, Sequelize) => {
    const Farmer = sequelize.define("farmer", {
        // sequelize creates the id column automatically
      /*
      document: {
          type: Sequelize.document
      },*/
      name: {
          type: Sequelize.STRING
      }/*,
      address: {
          type: Sequelize.address
      }*/
    });
  
    return Farmer;
  };