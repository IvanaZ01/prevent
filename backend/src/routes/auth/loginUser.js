const bcrypt = require('bcrypt');

const { User } = require('./../../models');

const { generateAccessToken } = require('./../../jwt.service');


const loginUser = async ({ username, password, rememberMe }, res) => {	
	let user = await User.findOne({
		where: {
			username,
		}
	});

	if (user == null) {
		res.status(400).send('Credentials are not valid.');
		return false;
	}

	const match = await bcrypt.compare(password, user.passwordHash);

	if (match) {
		const token = generateAccessToken(user, rememberMe);
		res.json({token, user});
	} else {
		res.status(400).send('Credentials are not valid.');
	}

	return true;
};

module.exports = loginUser;
