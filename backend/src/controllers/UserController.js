import User from '../models/User';
import bcrypt from 'bcryptjs';

class UserController {
  async store(req, res) {
    try {
      const { firstName, lastName, password, email } = req.body;

      const userExist = await User.findOne({ email });

      if (userExist) {
        res.json({ message: 'User alredy exists.' });
      }

      const hashPassword = await bcrypt.hash(password, 8);

      const user = await User.create({
        email,
        firstName,
        lastName,
        password: hashPassword,
      });

      return res.json({
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      });
    } catch (error) {
      return res.json({ message: `Error while registering a new user ${error}` });
    }
  }

  async index(req, res) {
    try {
      const { user_id } = req.headers;

      const user = await User.findById( user_id );

      return res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'User Id not found.' });
    }
  }
}

export default new UserController();
