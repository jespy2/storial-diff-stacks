import { IBook } from '../';

export interface IUser { 
  username: string;
  password: string;
  email: string;
  books: IBook[];
  createdAt: Date;
}