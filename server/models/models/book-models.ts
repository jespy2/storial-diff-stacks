import mongoose from 'mongoose';

const Book = new mongoose.Schema(
    {
        username: { type: String, required: true },
        book: {
            title: { type: String, required: true },
            author: { type: String, required: true },
            notes: { type: String, required: true },
            status: { type: String, required: true },
        }
    },
    { timestamps: true },
)

export default mongoose.model('books', Book)