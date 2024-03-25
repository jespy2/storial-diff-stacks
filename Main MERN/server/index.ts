import express from 'express'
import cors from 'cors'

import cookieParser from 'cookie-parser';
import DB from './db'
import { authRouter, bookRouter} from './routes'

const app = express();
const apiPort = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

DB.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/auth', authRouter);
app.use('/api', bookRouter);

app.listen(apiPort, () => console.log(`🤖 Server running on port ${apiPort} 🚀`));