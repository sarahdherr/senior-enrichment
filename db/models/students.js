'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
var Campus = require('./campuses')

module.exports = db.define('student', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: true
  },

  enrolledIn: {
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

  github: {
  	type: Sequelize.STRING
  }
}, {})
