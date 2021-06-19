const { User } = require('./../../models');

const createUser = async ({ name, role, email, username, password }, res) => {
	let user = await User.create({
		name,
		role,
		username,
		email,
		passwordHash: password,
	});

	res.send(user.toJSON());
};

module.exports = createUser;
