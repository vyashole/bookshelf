import { WANT_TO_READ, READING, COMPLETED } from '../static/books'
const bookReducer = (state = { books: [] }, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "FETCH_BOOKS_REQUESTED":
      return {
        ...state,
        isFetching: true
      }

    case "FETCH_BOOKS_SUCCESS":
      let data = [];

      for (property in payload) {
        data.push({ index: property, ...payload[property] });
      }

      return {
        ...state,
        books: data,
        reading: data.filter(data => data.category === READING),
        wantToRead: data.filter(data => data.category === WANT_TO_READ),
        completed: data.filter(data => data.category === COMPLETED),
        isFetching: false
      }

    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        isFetching: false
      }

    case "UPDATE_BOOKS_REQUESTED":
      return {
        ...state,
        isUpdating: true,
        success: false
      }

    case "UPDATE_BOOKS_SUCCESS":
      return {
        ...state,
        isUpdating: false,
        success: true
      }

    case "UPDATE_BOOKS_FAILURE":
      return {
        ...state,
        isUpdating: false,
        success: false
      }

    case "ADD_BOOKS_REQUESTED":
      return {
        ...state,
        isAdding: true
      }

    case "ADD_BOOKS_SUCCESS":
      return {
        ...state,
        isAdding: false
      }

    case "ADD_BOOKS_FAILURE":
      return {
        ...state,
        isAdding: false
      }

    default:
      return state;
  }
};

export default bookReducer;
