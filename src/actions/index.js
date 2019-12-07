import {
  FETCH_BOOKS,
  UPDATE_BOOKS,
  UPDATE_BOOK_PROGRESS,
  UPDATE_BOOK_CATEGORY,
} from './actionTypes';
import { SAMPLE_BOOKS } from '../static/books';

export function fetchBooks(books) {
  return (dispatch) => {
    dispatch({
      type: FETCH_BOOKS,
      payload: books || SAMPLE_BOOKS,
    });
  };
}


export function updateBookProgress(book) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_BOOK_PROGRESS,
      payload: book,
    });
  };
}

export function updateBookCategory(book) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_BOOK_CATEGORY,
      payload: book,
    });
  };
}