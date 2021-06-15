const { Article } = require('../../models');

const viewArticle = async (id, res)=>{
    const article = await Article.findByPk(id)
    res.send(article)
}

module.exports = viewArticle