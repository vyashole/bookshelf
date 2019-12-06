import { SAMPLE_BOOKS, WANT_TO_READ, READING, COMPLETED } from '../static/books'
import {
  FETCH_BOOKS,
  UPDATE_BOOKS,
  ADD_BOOKS
} from '../actions/actionTypes';

const INITIAL_STATE = {
  books: SAMPLE_BOOKS
}

const bookReducer = (state = INITIAL_STATE, action) => {
  const payload = action.payload;
  switch (action.type) {

    case FETCH_BOOKS:

      return {
        ...state,
        books: payload,
        isFetching: false
      }

    case UPDATE_BOOKS:
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
    case ADD_BOOKS:
      return {
        ...state,
        isAdding: false
      }

    default:
      return state;
  }
};

export default bookReducer;
