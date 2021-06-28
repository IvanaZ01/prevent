const { Sequelize } = require('sequelize');

const dbHost = process.env.DB_HOST;
const dbDatabase = process.env.DB_DATABASE;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(dbDatabase, dbUser, dbPassword, {
	host: dbHost,
	dialect: dbDialect,
});

async function initializeDatabaseConnection() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

initializeDatabaseConnection();

module.exports = sequelize;
