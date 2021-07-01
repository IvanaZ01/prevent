const Article = require('../../models/Article')
const Category = require('../../models/Category')

async function addCategoryToArticle({articleId, categoryId}, res){

    const article = Article.findByPk(articleId)
    const category = Category.findByPk(categoryId)

    article.addCategory(category)

    res.send(article)
}

module.exports = addCategoryToArticle