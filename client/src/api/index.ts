import axios from 'axios'
import { IBook } from '../types/types/books'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertBook = (payload: IBook) => api.post(`/book`, payload)
export const getAllBooks = () => api.get(`/books`)
export const updateBookById = (id: string, payload: IBook) => api.put(`/book/${id}`, payload)
export const deleteBookById = (id: string) => api.delete(`/book/${id}`)
export const getBookById = (id: string) => api.get(`/book/${id}`)

const apis = {
    insertBook,
    getAllBooks,
    updateBookById,
    deleteBookById,
    getBookById,
}

export default apis