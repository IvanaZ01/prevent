const {
  Article, ArticleCategory
} = require('../../models');

const updateArticle = async (
  id, res
) => {
  await ArticleCategory.destroy({
    where: {
      articleId: id
    }
  });

  await Article.destroy({
    where: {
      id
    }
  });

  res.send()
}

module.exports = updateArticle;