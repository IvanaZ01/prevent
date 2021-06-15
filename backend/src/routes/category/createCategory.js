const Category = require('../../models/Category')

const createCategory = async (
    {name, description},res
)=>{
   let category = await Category.create({
        name,
        description
    })

    res.send(category.toJSON())
}

module.exports = createCategory;
