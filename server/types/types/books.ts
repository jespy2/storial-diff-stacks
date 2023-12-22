export interface IBook {
  username: string;
  book: {
    _id: string;
    title: string;
    author: string;
    notes: string;
    status: 'read' | 'unread';
  }
}

export interface IBookQuery extends IBook{
  save: () => Promise<any>;
  _id: string;
}