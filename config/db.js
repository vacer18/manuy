const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('manuydb', 'root', 'root', {
  host: 'localhost',
  dialect:'mysql',
  define: {
      timestamps: false
  }
});

module.exports = db;