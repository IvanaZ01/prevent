const { Article } = require('../../models');

const updateArticle = async (id,
 {name, description, price, discount},res
)=>{
   let article = await Article.findByPk(id)

    if(name) article.name = name
    if(description) article.description = description
    if(price) article.price = price
    if(discount) article.discount = discount
   
    article.save()

    res.send(article.toJSON())
}

module.exports = updateArticle;
