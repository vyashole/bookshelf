import React, { Component } from 'react';
import {
  StyleSheet, Text, View, FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { fetchBooks } from '../actions';

import Book from './Book';

class Home extends Component {
  componentDidMount() {
    this.props.fetchBooks(this.props.books);
  }

  keyExtractor = (book) => book.id.toString()

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.bookPressHandler(item)} style={styles.item}>
      <Book book={item} />
    </TouchableOpacity>
  )

  bookPressHandler = (item) => {
    this.props.navigation.navigate('Book', { book: item });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.books}
          numColumns={2}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    margin: 10,
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
