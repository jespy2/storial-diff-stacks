import { Request, Response } from 'express';

export interface IBookController {
  createBook: (req: Request, res: Response) => Promise<void>;
  updateBook: (req: Request, res: Response) => Promise<void>;
  deleteBook: (req: Request, res: Response) => Promise<void>;
  getBookById: (req: Request, res: Response) => Promise<void>;
  getBooks: (req: Request, res: Response) => Promise<void>;
}