import { createAsyncThunk } from "@reduxjs/toolkit";
import apis from "../../api";

const thunks = {
  insertBook: createAsyncThunk(
    "book/insertBook",
    async (book: any, { rejectWithValue }) => {
      try {
        const response = await apis.insertBook(book);
        return response.data;
      } catch (err) {
        if (err instanceof Error) {
          rejectWithValue(err.message)
        } else {
          rejectWithValue('An unexpected error occured')
        }
      }
    }
  ),
  getAllBooks: createAsyncThunk(
    "book/getAllBooks",
    async (_, { rejectWithValue }) => {
      try {
        const response = await apis.getAllBooks();
        return response.data;
      } catch (err) {
        if (err instanceof Error) {
          rejectWithValue(err.message)
        } else {
          rejectWithValue('An unexpected error occured')
        }
      }
    }
  ),
  updateBookById: createAsyncThunk(
    "book/updateBookById",
    async (book: any, { rejectWithValue }) => {
      try {
        const response = await apis.updateBookById(book._id, book);
        return response.data;
      } catch (err) {
        if (err instanceof Error) {
          rejectWithValue(err.message)
        } else {
          rejectWithValue('An unexpected error occured')
        }
      }
    }
  ),
  deleteBookById: createAsyncThunk(
    "book/deleteBookById",
    async (id: any, { rejectWithValue }) => {
      try {
        const response = await apis.deleteBookById(id);
        return response.data;
      } catch (err) {
        if (err instanceof Error) {
          rejectWithValue(err.message)
        } else {
          rejectWithValue('An unexpected error occured')
        }
      }
    }
  ),
  getBookById: createAsyncThunk(
    "book/getBookById",
    async (id: any, { rejectWithValue }) => {
      try {
        const response = await apis.getBookById(id);
        return response.data;
      } catch (err) {
        if (err instanceof Error) {
          rejectWithValue(err.message)
        } else {
          rejectWithValue('An unexpected error occured')
        }
      }
    }
  )
}

export default thunks;