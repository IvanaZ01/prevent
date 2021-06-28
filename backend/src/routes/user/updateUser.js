const { User } = require('../../models');

const updateUser= async (id, {password}, res ) => {
   let user = await User.findByPk(id)
    user.passwordHash = password
    user.save()
    res.send(user.toJSON())
}

module.exports = updateUser;
