export const READING = 'READING'
export const WANT_TO_READ = 'WANT_TO_READ'
export const COMPLETED = 'COMPLETED'
export const SAMPLE_BOOKS = [
    {
        id: 1,
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J. K. Rowling',
        cover: 'https://covers.openlibrary.org/w/id/7984916-M.jpg',
        pages: 548,
        progress: 345,
        category: READING
    },
    {
        id: 2,
        title: 'The Hobbit',
        author: 'J. R. R. Tolkien',
        cover: 'https://covers.openlibrary.org/w/id/6979861-M.jpg',
        pages: 566,
        progress: 228,
        category: READING
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        cover: 'https://covers.openlibrary.org/w/id/7222246-M.jpg',
        pages: 189,
        progress: 0,
        category: WANT_TO_READ
    },
    {
        id: 4,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        cover: 'https://covers.openlibrary.org/w/id/7222249-M.jpg',
        pages: 246,
        progress: 0,
        category: WANT_TO_READ
    },
    {
        id: 5,
        title: 'The Great Gatsby',
        author: 'Scott Fitzerald',
        cover: 'https://covers.openlibrary.org/w/id/7222236-M.jpg',
        pages: 367,
        progress: 367,
        category: COMPLETED
    },
    {
        id: 6,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        cover: 'https://covers.openlibrary.org/w/id/7222250-M.jpg',
        pages: 786,
        progress: 786,
        category: COMPLETED
    }
]

