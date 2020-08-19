import bcrypt from 'bcryptjs';
import User from '../models/User';

class LoginController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(401).json({ message: 'Required field missing!' });
      }

      const user = await User.findOne({ email });

      if (user && await bcrypt.compare(password, user.password)) {
        const userResponser = {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        };
        return res.json(userResponser);
      } else {
        return res.json({ message: 'Email or Password does not match!' });
      }
    } catch (error) {
      res.status(400).json({ error: 'Error while authenticating a User' });
    }
  };
};

export default new LoginController();
