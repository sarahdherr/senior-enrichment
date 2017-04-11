'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
var Student = require('./students')

module.exports = db.define('campus', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: true
  },

  star: {
  	type: Sequelize.STRING
  },

  imgUrl: {
  	type: Sequelize.STRING
  },

  email: {
  	type: Sequelize.STRING
  },

  phone: {
  	type: Sequelize.STRING
  },

  portal: {
  	type: Sequelize.STRING
  }
})
