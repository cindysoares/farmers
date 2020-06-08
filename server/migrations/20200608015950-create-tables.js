'use strict';
const db = require("../models")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return db.sequelize.sync({ force: true }).then(() => {
      console.log("Recreate db.");
    })
  },

  down: (queryInterface, Sequelize) => {
  }
};
