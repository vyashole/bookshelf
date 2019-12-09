import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookSearchComponent from '../components/BookSearchComponent';

class BookSearch extends Component {

    bookPressHandler = (item) => {
        this.props.navigation.navigate('Book', { book: item });
    }

    render() {
        return (
            <BookSearchComponent books={this.props.books} bookPressHandler={this.bookPressHandler} />
        );
    }
}
const mapStateToProps = (state) => ({
    books: state.books.books,
    isFetching: state.books.isFetching,
});


const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(BookSearch);
