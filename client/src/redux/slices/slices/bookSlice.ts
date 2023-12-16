import { createSlice } from "@reduxjs/toolkit";
import { IBook, IBookState } from "../../../types";
import thunks from "../../thunks/books";

const { insertBook, getAllBooks, updateBookById, deleteBookById } = thunks;

const initialBookState: IBookState = {
  books: {
    success: false,
    data: []
  },
  isLoading: false,
  isError: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState: initialBookState,
  reducers: {
    insertBook: (state, action) => {
      state = {
        books: {
          data: [...state.books.data, action.payload.book.data],
          success: action.payload.success
        },
        isLoading: false,
        isError: false
      }
    },
    getAllBooks: (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    deleteBookById: (state, action) => {
      const index = state.books.data.findIndex((book) => book._id === action.payload);
      state.books.data.splice(index, 1);

    },
    updateBookById: (state, action) => {
      const index = state.books.data.findIndex((book) => book._id === action.payload._id);
      state.books.data[index] = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(insertBook.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(insertBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = {
          data: [...state.books.data, action?.payload ? action?.payload.book : {} as IBook],
          success: action.payload?.response.data.success
        };
      })
      .addCase(insertBook.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(deleteBookById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteBookById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(deleteBookById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(updateBookById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateBookById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(updateBookById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
    });
  }
});

export const { reducer: bookReducer } = bookSlice;