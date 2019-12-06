import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux'

import { fetchBooks } from '../actions'

import Book from './Book'
import { TouchableOpacity } from 'react-native-gesture-handler';
class Home extends Component {

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.bookPressHandler(item)} style={styles.item}>
        <Book book={item} />
      </TouchableOpacity>
    );
  }

  keyExtractor = book => book.id.toString()

  componentDidMount() {
    this.props.fetchBooks()
  }

  bookPressHandler = (item) => {
    this.props.navigation.navigate('Book', { book: item })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.books}
          numColumns={2}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    margin: 10
  }

})


const mapStateToProps = (state) => {
  return {
    books: state.books.books,
    isFetching: state.books.isFetching
  }
}


const mapDispatchToProps = dispatch => ({
  fetchBooks: () => fetchBooks()(dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Home)
