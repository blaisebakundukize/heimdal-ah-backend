import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const Helper = {
  /**
   * Gnerate Token
   * @param {string} email
   * @returns {string} token
   */
  generateEmailToken(email) {
    const token = jwt.sign(
      {
        email
      },
      process.env.EMAIL_SECRET,
      { expiresIn: '3d' }
    );
    return token;
  }
};

export default Helper;
