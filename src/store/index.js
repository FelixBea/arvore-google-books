import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './reducers/books';

export default configureStore({ reducer: { books: booksReducer } });
