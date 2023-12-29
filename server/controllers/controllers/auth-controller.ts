import { User } from '../../models/';
import bcrypt from 'bcryptjs';

import { createSecretToken } from '../../util/SecretToken';
import { IAuthController, IUser } from '../../types';


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
      return;
    }
    const user = await User.create(newUser);
    const token = createSecretToken(user._id.toString());
    res.cookie('token', token, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    });
    res.status(201)
      .json({
        success: true,
        message: 'User created!',
        user
      })
    return;
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
      res.status(400).json({ message: 'Invalid username' });
      return;
    }
    const authActualPass = await bcrypt.compare(password, user.password);
    const authCryptPass = await User.findOne({ password });
    const auth = authActualPass || authCryptPass;
    if(!auth) {
      res.status(400).json({ message: 'Invalid password' });
      return;
    }
    const token = createSecretToken(user._id.toString());
    res.cookie('token', token, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    });
    res.status(200).json({ message: 'User logged in!', success: true, user });
    next();
  }
  catch(error) {
    res.status(500).json({ error, message: 'User not logged in' });
    next(error);
  }
};

authController.getUser = async (req, res) => {
  try {
    const findUser = await User.findOne({ username: req.params.username });
    if (!findUser) {
      res.status(400).json({ message: 'User not found' });
      return;
    }
    res.status(200).json({ message: 'User found!', success: true, data: findUser });
    return;
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error, message: 'User not found' });
      return;
    } else {
      res.status(500).send('User not found');
      return;
    }
  }
 }
export default authController;