import bookReducer, { INITIAL_STATE } from '../../src/reducers/bookReducer'
import expect from 'expect'
import { UPDATE_BOOK_CATEGORY, UPDATE_BOOK_PROGRESS, FETCH_BOOKS } from '../../src/actions/actionTypes';
import { WANT_TO_READ, READING, COMPLETED } from '../../src/static/books';
const mockBook = {
    id: '0',
    title: "Booky McBookface",
    author: "Authory McAuthorface",
    category: READING,
    progress: 12,
    pages: 15,
}

const mockBooks = {
    books: [
        mockBook
    ]
}
describe('bookReducer', () => {
    it('should return the initial state', () => {
        expect(bookReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle FETCH_BOOKS', () => {
        expect(bookReducer(undefined, {
            type: FETCH_BOOKS,
            payload: mockBooks,
        })).toEqual({
            ...INITIAL_STATE,
            books: mockBooks,
        });
    });

    it('should handle UPDATE_BOOK_CATEGORY WANT_TO_READ', () => {
        expect(bookReducer(mockBooks, {
            type: UPDATE_BOOK_CATEGORY,
            payload: { ...mockBook, category: WANT_TO_READ },
        })).toEqual({
            books: [
                {
                    ...mockBook,
                    progress: 0,
                    category: WANT_TO_READ,
                }
            ],
        });
    });

    it('should handle UPDATE_BOOK_CATEGORY READING', () => {
        expect(bookReducer(mockBooks, {
            type: UPDATE_BOOK_CATEGORY,
            payload: { ...mockBook, category: READING },
        })).toEqual({
            books: [
                {
                    ...mockBook,
                    category: READING,
                }
            ],
        });
    });

    it('should handle UPDATE_BOOK_CATEGORY COMPLETED', () => {
        expect(bookReducer(mockBooks, {
            type: UPDATE_BOOK_CATEGORY,
            payload: { ...mockBook, category: COMPLETED },
        })).toEqual({
            books: [
                {
                    ...mockBook,
                    progress: 15,
                    category: COMPLETED,
                }
            ],
        });
    });


    it('should handle UPDATE_BOOK_PROGRESS 0', () => {
        expect(bookReducer(mockBooks, {
            type: UPDATE_BOOK_PROGRESS,
            payload: { ...mockBook, progress: 0 },
        })).toEqual({
            books: [
                {
                    ...mockBook,
                    progress: 0,
                    category: WANT_TO_READ,
                }
            ],
        });
    });
    it('should handle UPDATE_BOOK_PROGRESS positive', () => {
        expect(bookReducer(mockBooks, {
            type: UPDATE_BOOK_PROGRESS,
            payload: { ...mockBook, progress: 6 },
        })).toEqual({
            books: [
                {
                    ...mockBook,
                    progress: 6,
                    category: READING,
                }
            ],
        });
    });
    it('should handle UPDATE_BOOK_PROGRESS negative', () => {
        expect(bookReducer(mockBooks, {
            type: UPDATE_BOOK_PROGRESS,
            payload: { ...mockBook, progress: -6 },
        })).toEqual({
            books: [
                {
                    ...mockBook,
                    progress: 0,
                    category: WANT_TO_READ,
                }
            ],
        });
    });

    it('should handle UPDATE_BOOK_PROGRESS overflow', () => {
        expect(bookReducer(mockBooks, {
            type: UPDATE_BOOK_PROGRESS,
            payload: { ...mockBook, progress: 16 },
        })).toEqual({
            books: [
                {
                    ...mockBook,
                    progress: 15,
                    category: COMPLETED,
                }
            ],
        });
    });
});
