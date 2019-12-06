import {
  FETCH_BOOKS,
  UPDATE_BOOKS,
  ADD_BOOKS
} from './actionTypes';
import { SAMPLE_BOOKS } from '../static/books'

export function fetchBooks(books) {
  return dispatch => {
    dispatch({
      type: FETCH_BOOKS,
      payload: books || SAMPLE_BOOKS
    })
  }
}


export function updateBook({ id, category, progress }) {
  return dispatch => {
    dispatch({
      type: UPDATE_BOOKS,
      payload: { id, category, progress }
    })

  }
}