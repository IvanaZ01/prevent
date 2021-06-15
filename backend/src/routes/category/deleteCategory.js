const Category = require('../../models/Category')

const deleteCategory = async (
 {id}, res
)=>{
   await Category.destroy({
        where:{
            id
        }
    })
    res.send()
}

module.exports = deleteCategory;
