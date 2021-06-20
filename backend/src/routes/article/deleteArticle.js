const { Article } = require('../../models');

const updateArticle = async (
 id, res
)=>{
   await Article.destroy({
        where:{
            id
        }
    })
    res.send()
}

module.exports = updateArticle;
