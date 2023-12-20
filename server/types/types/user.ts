import { IBook } from '../';

export interface IUser { 
  username: string;
  password: string;
  email: string;
  books: IBook[];
  createdAt: Date;
}

export interface IUserQuery extends IUser {
  save: () => Promise<any>;
  _id: string;
}