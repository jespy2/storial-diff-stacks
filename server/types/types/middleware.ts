import { Request, Response } from 'express';
export type IUserVerification = (req: Request, res: Response) => Promise<void>;