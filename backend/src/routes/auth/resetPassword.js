const { User } = require('./../../models');
const { sendResetPasswordEmail } = require('./../../email.service');
const bcrypt = require('bcrypt');

const resetPassword = async ({ username, password }, res) => {	
	let user = await User.findOne({
		where: {
			username,
		}
	});

	if (user == null) {
		res.status(400).send('User does not exist.');
		return false;
	}

	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	user.passwordHash = passwordHash;

	await user.save();

	const url = `${process.env.FRONTEND_APP_URL}/login`;

	await sendResetPasswordEmail(user.email, user.name, url);

	res.json({
		success: true,
	});

	return true;
};

module.exports = resetPassword;
