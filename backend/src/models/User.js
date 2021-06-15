const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../database');

class User extends Model {}

User.init(
	{
		role: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		passwordHash: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'User',
		timestamps: true,
	}
);

console.log(User === sequelize.models.User);

module.exports = User;
