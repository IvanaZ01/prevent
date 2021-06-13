const { Sequelize } = require('sequelize');

const dbHost = 'localhost';
const dbDatabase = 'prevent';
const dbUsername = 'ivana';
const dbPassword = '123456';
const dbDialect = 'mysql';

const sequelize = new Sequelize(dbDatabase, dbUsername, dbPassword, {
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
