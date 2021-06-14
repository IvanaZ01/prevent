const Article = require('../../models/Article')

const updateArticle = async (
 {id}, res
)=>{
   await Article.destroy({
        where:{
            id
        }
    })
    res.send()
}

module.exports = updateArticle;
