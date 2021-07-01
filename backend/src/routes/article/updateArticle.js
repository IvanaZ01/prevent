const { Article, Category, ArticleCategory } = require('../../models');

const updateArticle = async (id, { name, description, price, discount, categories }, res) => {
  let article = await Article.findByPk(id);

  await ArticleCategory.destroy({
      where: {
      articleId: id
      }
  });

  categories.forEach(async (category) => {
    let createdCategory = await Category.findOne({
      where: {
        id: category
      }
    });

    await article.addCategory(createdCategory);
  });

  article.save()

  res.send(article.toJSON())
}

module.exports = updateArticle;
