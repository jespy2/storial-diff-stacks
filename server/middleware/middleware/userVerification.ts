import { User } from '../../models';
import { IUserVerification } from '../../types';
require('dotenv').config();
const jwt = require('jsonwebtoken');

export const userVerification: IUserVerification = async (req, res) => { 
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ _id: decodedToken._id });
    if (!user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    res.status(200).json({ message: 'User verified', user });
  } catch (error) {
    res.status(500).json({ error, message: 'User not verified' });
  }
};