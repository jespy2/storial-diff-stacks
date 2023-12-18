import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook, IBookState, SortDirection, SortItem } from "../../../types";
import thunks from "../../thunks/books";

const { insertBook, getAllBooks, updateBookById, deleteBookById } = thunks;

const initialBookState: IBookState = {
  books: {
    success: false,
    data: [],
    sortInfo: {
      sortBy: '',
      sortDirection: SortDirection.NONE
    }
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
          success: action.payload.success,
          sortInfo: {
            sortBy: state.books.sortInfo.sortBy,
            sortDirection: state.books.sortInfo.sortDirection
          }
        },
        isLoading: false,
        isError: false
      }
    },
    getAllBooks: (state, action) => {
      state.books.data = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    deleteBookById: (state, action) => {      
      const newBookData = state.books.data.filter((book) => book._id !== action.payload?.book);
      state.books.data = newBookData;
    },
    updateBookById: (state, action) => {
      const index = state.books.data.findIndex((book) => book._id === action.payload._id);
      state.books.data[index] = action.payload.book;
    },
    sortBooks: (state, action: PayloadAction<{sortBy: SortItem }>) => { 
      const { sortBy } = action.payload;
      let newSortDirection = SortDirection.ASC;
      const sortedBooks: IBook[] = state.books.data.sort((a: IBook, b: IBook) => {
        const currDirection = state.books.sortInfo.sortDirection;
        const isSameSortItem = state.books.sortInfo.sortBy === sortBy;
        const reversedDirection = currDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;
        newSortDirection = isSameSortItem ? reversedDirection : SortDirection.ASC;
        if (a === undefined || b === undefined) return 0;
        let aSortItem = a[sortBy].toUpperCase();
        let bSortItem = b[sortBy].toUpperCase();
        if (aSortItem < bSortItem) return newSortDirection === SortDirection.ASC ? -1 : 1;
        if (aSortItem > bSortItem) return newSortDirection === SortDirection.ASC ? 1 : -1;
        return 0;
      });
      state.books.sortInfo.sortBy = sortBy;
      state.books.sortInfo.sortDirection = newSortDirection;
      state.books.data = sortedBooks;
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
          sortInfo: {
            sortBy: state.books.sortInfo.sortBy,
            sortDirection: state.books.sortInfo.sortDirection  
          },
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
        state.books.data = action.payload.data;
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
        const newBookData = state.books.data.filter((book) => book._id !== action.payload?.book);
        state.isLoading = false;
        state.isError = false;
        state.books.data = newBookData;
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
        const index = state.books.data.findIndex((book) => book._id === action.payload?.book._id);
        state.isLoading = false;
        state.isError = false;
        state.books.data[index] = action.payload?.book;
      })
      .addCase(updateBookById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
    });
  }
});
export const { reducer: bookReducer } = bookSlice;