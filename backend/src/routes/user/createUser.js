const User = require('./../../models/User');

const createUser = async (
	{ name, role, email, username, passwordHash },
	res
) => {
	let user = User.build({
		name,
		role,
		username,
		email,
		passwordHash,
	});

	await user.save();

	res.send(user.toJSON());
};

module.exports = createUser;
