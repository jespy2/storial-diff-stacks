export interface IBook {
  title: string;
  author: string;
  notes: string;
}

export interface IBookQuery extends IBook{
  save: () => Promise<any>;
  _id: number;
}