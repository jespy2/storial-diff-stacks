import express from 'express'
import cors from 'cors'

import cookieParser from 'cookie-parser';
import DB from './db'
import { authRouter, bookRouter} from './routes'

const app = express();
const apiPort = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

DB.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello World!')
// })

app.use('/auth', authRouter);
app.use('/api', bookRouter);

app.listen(apiPort, () => console.log(`🤖 Server running on port ${apiPort} 🚀`));