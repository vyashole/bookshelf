import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import BookShelf from '../components/BookShelf';
import SafeAreaView from 'react-native-safe-area-view';
import { View, StyleSheet } from 'react-native';
import { Color } from '../theme';
import { Icon } from '@ui-kitten/components';


const SearchIcon = (style) => (
    <Icon {...style} name='search' />
);

const ClearIcon = (style) => (
    <Icon {...style} name='backspace' />
);


const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debounceValue;
};


const BookSearchComponent = ({ books, bookPressHandler }) => {
    const [query, setQuery] = useState('');
    const debounceQuery = useDebounce(query, 300);
    const [filteredBookList, setFilteredBookList] = useState(bookList);

    const bookList = Object.values(books)
        .map(book => ({
            ...book,
            lowerCaseTitle: book.title.toLowerCase(),
            lowerCaseAuthor: book.author.toLowerCase(),
        }))
        .sort((a, b) => a.name > b.name);

    useEffect(() => {
        const lowerCaseQuery = debounceQuery.toLowerCase();
        const newBooks = bookList
            .filter((book) => (book.lowerCaseTitle.includes(lowerCaseQuery) || book.lowerCaseAuthor.includes(lowerCaseQuery)))
            .map((book) => ({
                ...book,
                rank: (book.lowerCaseTitle.indexOf(lowerCaseQuery) === -1 ?
                    book.lowerCaseAuthor.indexOf(lowerCaseQuery) : book.lowerCaseTitle.indexOf(lowerCaseQuery)
                ),
            }))
            .sort((a, b) => a.rank - b.rank);

        setFilteredBookList(newBooks);
    }, [debounceQuery]);
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <View style={{ alignSelf: "stretch" }}>
                <SearchBar
                    placeholder="Search books by title or author..."
                    onChangeText={setQuery}
                    value={query}
                    platform='android'
                    cancelIcon={<SearchIcon height={24} width={24} />}
                    searchIcon={<SearchIcon height={24} width={24} />}
                    clearIcon={<ClearIcon height={24} width={24} onPress={() => setQuery('')} />}
                />
            </View>
            <BookShelf books={filteredBookList} bookPressHandler={bookPressHandler} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.background,
    },
});

export default BookSearchComponent;