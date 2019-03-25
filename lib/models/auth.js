'use strict'
// external modules
var Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
  var Auth = sequelize.define('Auth', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    authType: {
      type: Sequelize.STRING
    },
    serviceUid: {
      type: Sequelize.STRING
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['userId']
      }
    ],
    classMethods: {
      associate: function (models) {
        Author.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'user',
          constraints: false,
          onDelete: 'CASCADE',
          hooks: true
        })
      }
    }
  })
  return Auth
}
