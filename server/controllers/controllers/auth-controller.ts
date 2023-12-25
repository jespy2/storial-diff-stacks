import { Book, User } from '../../models/';
import { createSecretToken } from '../../util/SecretToken';
import bcrypt from 'bcryptjs';

import { IAuthController, IUser, IUserQuery } from '../../types';


const authController = {} as IAuthController;

authController.createUser = async (req, res, next) => { 
  const newUser: IUser = req.body;
  const { email } = newUser;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }
    if (!newUser) {
       res.status(400).json({
        message: 'User logged in!',
        success: false,
        error: Error
       });
       return
    }
    const user = await User.create(newUser);
    const book = await Book.create({ username: newUser.username });
    const token = createSecretToken(user._id.toString());
    res.cookie('token', token, {
      httpOnly: false,
      sameSite: 'none',
      secure: true
    });
    res.status(201)
      .json({
        success: true,
        message: 'User created!',
        user
      });
    next();
  } catch (error) {
    res.status(500).json({ error, message: 'User not created' });
    next(error);
  }
};

authController.loginUser = async (req, res, next) => { 
  try {
    const { username, password } = req.body;
    if(!username || !password) {
      res.status(400).json({ message: 'Please provide username and password' });
      return;
    }
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ message: 'Invalid password or username' });
      return;
    }
    const auth = await bcrypt.compare(password, user.password);
    if(!auth) {
      res.status(400).json({ message: 'Invalid password or username' });
      return;
    }
    const token = createSecretToken(user._id.toString());
    res.cookie('token', token, {
      httpOnly: false,
      sameSite: 'none',
      secure: true
    });
    res.status(200).json({ message: 'User logged in!', success: true, user });
    next();
  }
  catch(error) {
    res.status(500).json({ error, message: 'User not logged in' });
    next(error);
  }
};
export default authController;