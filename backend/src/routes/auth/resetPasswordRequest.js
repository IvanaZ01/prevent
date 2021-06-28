const { User } = require('./../../models');
const { sendResetPasswordRequestEmail } = require('./../../email.service');

const resetPasswordRequest = async ({ username }, res) => {	
	let user = await User.findOne({
		where: {
			username,
		}
	});

	if (user == null) {
		res.status(400).send('User does not exist.');
		return false;
	}

	const url = `${process.env.FRONTEND_APP_URL}/reset-password?username=${user.username}`;

	await sendResetPasswordRequestEmail(user.email, user.name, url);

	res.json({
		success: true,
	});

	return true;
};

module.exports = resetPasswordRequest;
