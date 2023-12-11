export interface IBooks {
  title: string;
  author: string;
  notes: string;
}

export interface IBookQuery extends IBooks{
  save: () => Promise<any>;
  _id: number;
}