const { User } = require('./../../models');

const createUser = async ({ name, role, email, username, password }, res) => {
	let user = User.build({
		name,
		role,
		username,
		email,
		passwordHash: password,
	});

	await user.save();

	res.send(user.toJSON());
};

module.exports = createUser;
