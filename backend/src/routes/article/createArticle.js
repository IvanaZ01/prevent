const Article = require('../../models/Article')

const createArticle = async (
    {name, description, price, discount},res
)=>{
   let article = await Article.create({
        name,
        description,
        price,
        discount
    })

    res.send(article.toJSON())
}

module.exports = createArticle;
