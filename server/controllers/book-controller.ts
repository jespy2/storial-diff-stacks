import Book from '../models/book-models'

import { IBookController, IBookQuery, IBooks } from '../types';


const bookController = {} as IBookController;

bookController.createBook = async (req, res): Promise<void> => {
    const newBook: IBooks = req.body;
    
    if (!newBook) {
        res.status(400).json({
            success: false,
            error: 'You must provide a book',
        });
        return;
    }

    const book = new Book(newBook)

    if (!book) {
        res.status(400).json({ success: false, error: Error });
        return;
    }

    try {
        await book
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: book._id,
                    message: 'Book created!',
                })
            })
    } catch(error) {
            res.status(500).json({
                error,
                message: 'Book not created!',
            })
    }
}


bookController.updateBook = async (req, res): Promise<void> => {
    const body: IBooks = req.body

    if (!body) {
        res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
        return;
    }
    
    try {
        const book = await Book.findOne({ _id: req.params.id });
            if (!book) {
                res.status(404).json({
                    message: 'Book not found!',
                });
                return;
            }
            
        book.title = body.title
        book.author = body.author
        book.notes = body.notes
            await book.save();
            res.status(200).json({
                success: true,
                id: book._id,
                message: 'Book updated!',
            });
    } catch (error) {
        res.status(404).json({
            error,
            message: 'Book not updated!',
        });
    }
}

bookController.deleteBook = async (req, res): Promise<void> => {
    await Book.findOneAndDelete({ _id: req.params.id }, (err: Error, book: IBookQuery) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!book) {
            return res
                .status(404)
                .json({ success: false, error: `Book not found` })
        }

        return res.status(200).json({ success: true, data: book })
    }).catch(err => console.log(err))
}

bookController.getBookById = async (req, res): Promise<void> => {
    await Book.findOne({ _id: req.params.id }, (err: Error, book: IBookQuery) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!book) {
            return res
                .status(404)
                .json({ success: false, error: `Book not found` })
        }
        return res.status(200).json({ success: true, data: book })
    }).catch(err => console.log(err))
}

bookController.getBooks = async (req, res): Promise<void> => {
    await Book.find({}, (err: Error, books: IBookQuery[]) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!books.length) {
            return res
                .status(404)
                .json({ success: false, error: `Book not found` })
        }
        return res.status(200).json({ success: true, data: books })
    }).catch(err => console.log(err))
}

export default bookController;