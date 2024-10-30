const { Sequelize } = require('sequelize')

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME

// Database
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
