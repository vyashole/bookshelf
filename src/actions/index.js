import {
  FETCH_BOOKS_REQUESTED,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_SUCCESS,
  UPDATE_BOOKS_FAILURE,
  UPDATE_BOOKS_REQUESTED,
  UPDATE_BOOKS_SUCCESS,
  ADD_BOOKS_FAILURE,
  ADD_BOOKS_REQUESTED,
  ADD_BOOKS_SUCCESS
} from './actionTypes';
import { BOOKS } from '../static/books'

export function fetchBooks(books) {
  return dispatch => {
    dispatch({
      type: FETCH_BOOKS_REQUESTED,
      payload: {}
    })
    // TODO Fetch books from db
    if (!books) {
      dispatch({
        type: FETCH_BOOKS_SUCCESS,
        payload: BOOKS
      })
    }
    else {
      dispatch({
        type: FETCH_BOOKS_SUCCESS,
        payload: books
      })
    }

  }
}


export function updateBook({ id, category, progress }) {
  return dispatch => {
    dispatch({
      type: UPDATE_BOOKS_SUCCESS,
      payload: { id, category, progress }
    })

  }
}