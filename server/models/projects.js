const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    shortContent: Sequelize.TEXT,
    heroku: Sequelize.STRING,
    github: Sequelize.STRING,
    longContent: Sequelize.TEXT,
    date: Sequelize.STRING,
    tech: Sequelize.ARRAY(Sequelize.STRING),
    imgOverview: Sequelize.STRING,
    imgTech: Sequelize.STRING,
})

module.exports = Project
