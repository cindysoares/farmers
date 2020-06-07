module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define("document", {
      documentNumber: {
          type: Sequelize.STRING
      },
      documentType: {
          type: Sequelize.STRING
      }
    });
  
    return Document;
  };