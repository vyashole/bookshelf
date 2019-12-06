import { BOOKS, WANT_TO_READ, READING, COMPLETED } from '../static/books'
import {
  FETCH_BOOKS_REQUESTED,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_SUCCESS,
  UPDATE_BOOKS_REQUESTED,
  UPDATE_BOOKS_FAILURE,
  UPDATE_BOOKS_SUCCESS,
  ADD_BOOKS_REQUESTED,
  ADD_BOOKS_FAILURE,
  ADD_BOOKS_SUCCESS
} from '../actions/actionTypes';

const INITIAL_STATE = {
  books: BOOKS
}

const bookReducer = (state = INITIAL_STATE, action) => {
  const payload = action.payload;
  switch (action.type) {
    case FETCH_BOOKS_REQUESTED:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_BOOKS_SUCCESS:
      let data = [];

      for (property in payload) {
        data.push({ index: property, ...payload[property] });
      }

      return {
        ...state,
        books: data,
        isFetching: false
      }

    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false
      }

    case UPDATE_BOOKS_REQUESTED:
      return {
        ...state,
        isUpdating: true,
        success: false
      }

    case UPDATE_BOOKS_SUCCESS:
      const { books } = state
      updatedBooks = books.map(book => {
        if (book.id === payload.id) return { ...book, ...payload }
        return book
      })
      return {
        ...state,
        books: updatedBooks,
        isUpdating: false,
        success: true
      }

    case UPDATE_BOOKS_FAILURE:
      return {
        ...state,
        isUpdating: false,
        success: false
      }

    case ADD_BOOKS_REQUESTED:
      return {
        ...state,
        isAdding: true
      }

    case ADD_BOOKS_SUCCESS:
      return {
        ...state,
        isAdding: false
      }

    case ADD_BOOKS_FAILURE:
      return {
        ...state,
        isAdding: false
      }

    default:
      return state;
  }
};

export default bookReducer;
