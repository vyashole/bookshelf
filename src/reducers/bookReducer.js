import {
  SAMPLE_BOOKS, WANT_TO_READ, READING, COMPLETED,
} from '../static/books';
import {
  FETCH_BOOKS,
  UPDATE_BOOKS,
  ADD_BOOKS,
  UPDATE_BOOK_CATEGORY,
  UPDATE_BOOK_PROGRESS,
} from '../actions/actionTypes';

export const INITIAL_STATE = {
  books: SAMPLE_BOOKS,
};

const bookReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  const { books } = state;
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: payload,
      };

    case UPDATE_BOOKS:
      updatedBooks = books.map((book) => {
        if (book.id === payload.id) return { ...book, ...payload };
        return book;
      });
      return {
        ...state,
        books: updatedBooks,
      };

    case UPDATE_BOOK_CATEGORY:
      if (payload.category === WANT_TO_READ) payload.progress = 0;
      else if (payload.category === COMPLETED) payload.progress = payload.pages;
      updatedBooks = books.map((book) => {
        if (book.id === payload.id) return { ...book, ...payload };
        return book;
      });
      return {
        ...state,
        books: updatedBooks,
      };

    case UPDATE_BOOK_PROGRESS:
      if (payload.progress >= payload.pages) {
        payload.progress = payload.pages;
        payload.category = COMPLETED;
      }
      else if (payload.progress <= 0) {
        payload.progress = 0;
        payload.category = WANT_TO_READ;
      }
      else {
        payload.category = READING;
      }
      updatedBooks = books.map((book) => {
        if (book.id === payload.id) return { ...book, ...payload };
        return book;
      });
      return {
        ...state,
        books: updatedBooks,
      };

    case ADD_BOOKS:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default bookReducer;
