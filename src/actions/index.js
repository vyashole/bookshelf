import { FETCH_BOOKS_REQUESTED, FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS } from './actionTypes';
import { BOOKS } from '../static/books'

export function fetchBooks() {
  console.log("FETCHING BOOKS")
  return dispatch => {
    dispatch({
      type: FETCH_BOOKS_REQUESTED,
      payload: {}
    })
    console.log('BOOKS', BOOKS)
    // TODO Fetch books from db
    if (BOOKS) {
      dispatch({
        type: FETCH_BOOKS_SUCCESS,
        payload: BOOKS
      })
    }
    else {
      dispatch({
        type: FETCH_BOOKS_FAILURE,
        payload: {}
      })
    }

  }
}
