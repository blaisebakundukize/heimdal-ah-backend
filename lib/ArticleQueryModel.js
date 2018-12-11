import models from '../models';

const { articles } = models;
/**
 *
 *
 * @class ArticleQueryModel
 */
class ArticleQueryModel {
  /**
    * @param {stirng} slug  must be type string
   * @return {object} return an article if it exist or null if it doesn't.
   */
  static async getArticleBySlug(slug) {
    try {
      const article = await articles.findOne({ where: { slug } });
      if (article) {
        return article;
      }
      return null;
    } catch (e) {
      throw new Error('Something went wrong', e);
    }
  }
}
export default ArticleQueryModel;