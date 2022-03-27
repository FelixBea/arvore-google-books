import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/books';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    searchParameters: {
      q: 'aventura',
      maxResults: '10',
      startIndex: '0'
    },
    books: [],
    homeBookshelves: {
      acao: [],
      infantil: [],
      destaques: [],
      aventura: []
    },
    status: '',
    error: ''
  },
  reducers: {
    setSearchParameters: (state, { payload }) => {
      state.searchParameters = payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setHomeBookshelves: (state, action) => {
      state.homeBookshelves = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(searchHomeBookshelves.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(searchHomeBookshelves.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.homeBookshelves[payload.homeBookshelfKey] = payload.data;
      })
      .addCase(searchHomeBookshelves.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error.message;
      });
  }
});

const fetchBookshelves = async (searchParameters) => {
  const data = await api.volumes.get(searchParameters);
  return { data: data.items, homeBookshelfKey: searchParameters.q };
};

export const searchHomeBookshelves = createAsyncThunk(
  'books/searchHomeBookshelves',
  fetchBookshelves
);

export const {
  setSearchParameters,
  setBooks,
  setHomeBookshelves,
  setStatus,
  setError
} = booksSlice.actions;

export default booksSlice.reducer;
