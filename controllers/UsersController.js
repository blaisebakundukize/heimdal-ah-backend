import Response from '../helpers/StatusResponse';
import models from '../models';


const { users, profiles, roles } = models;

/**
* @description UsersController class
*/
class UsersController {
  /**
   * @description Fetch all the users
   * @param {Object} req - HTTP Request
   * @param {Object} res - HTTP Response
   * @return {Object} Returned object
   */
  static async list(req, res) {
    try {
      const authors = await users.findAll({
        include: [profiles, {
          model: roles,
          as: 'roles',
          where: {
            role: 'author'
          }
        }],
        attributes: { exclude: ['password'] }
      });
      if (authors.length === 0) {
        Response.notfound(res, {
          message: 'No author found',
          status: 404
        });
      } else {
        Response.success(res, {
          message: 'List of authors',
          users: authors
        });
      }
    } catch (error) {
      Response.internalServerError(res, {
        message: `Something went wrong..${error}`
      });
    }
  }
}

export default UsersController;