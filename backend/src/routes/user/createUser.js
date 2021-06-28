const bcrypt = require('bcrypt');
const { sendWelcomeEmail } = require('./../../email.service');
const { User } = require('./../../models');

const createUser = async ({ name, role, email, username, password }, res) => {
	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	let user = await User.create({
		name,
		role,
		username,
		email,
		passwordHash,
	});

	await sendWelcomeEmail(email, name);

	res.send(user.toJSON());
};

module.exports = createUser;
