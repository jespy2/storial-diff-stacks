export interface IBook {
  username: string;
  _id?: string;
  book: {
      title: string;
      author: string;
      notes: string;
      status: 'read' | 'unread';
    }
}