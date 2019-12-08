import React, { Component } from 'react';
import {
  StyleSheet, Text, View, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import SafeAreaView, { SafeAreaConsumer } from 'react-native-safe-area-view'
import { fetchBooks } from '../actions';

import { Color } from '../theme';
import BookShelf from '../components/BookShelf';

class Home extends Component {
  componentDidMount() {
    this.props.fetchBooks(this.props.books);
  }

  bookPressHandler = (item) => {
    this.props.navigation.navigate('Book', { book: item });
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
        <BookShelf
          books={this.props.books}
          bookPressHandler={this.bookPressHandler}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});


const mapStateToProps = (state) => ({
  books: state.books.books,
  isFetching: state.books.isFetching,
});


const mapDispatchToProps = (dispatch) => ({
  fetchBooks: (books) => fetchBooks(books)(dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
