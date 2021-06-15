const { User } = require('./../../models');

const getAllUsers = async (res) => {
	const users = await User.findAll();

	res.send(users);
};

module.exports = getAllUsers;
