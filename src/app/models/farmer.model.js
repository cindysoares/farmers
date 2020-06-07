module.exports = (sequelize, Sequelize) => {
    const Farmer = sequelize.define("farmer", {
        // sequelize creates the id column automatically
        name: {
            type: Sequelize.STRING
        }      
    });
  
    return Farmer;
  };