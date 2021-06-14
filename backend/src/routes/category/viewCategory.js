const Category = require('../../models/Category')

const viewCategory = async (id, res)=>{
    const category = await Category.findByPk(id)
    res.send(category)
}

module.exports = viewCategory