import axios from 'axios'
import { IBook } from '../types/books'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertBook = (payload: IBook) => api.post(`/book`, payload)
export const getAllBooks = () => api.get(`/books`)
export const updateBookById = (id: number, payload: IBook) => api.put(`/book/${id}`, payload)
export const deleteBookById = (id: number) => api.delete(`/book/${id}`)
export const getBookById = (id: number) => api.get(`/book/${id}`)

const apis = {
    insertBook,
    getAllBooks,
    updateBookById,
    deleteBookById,
    getBookById,
}

export default apis