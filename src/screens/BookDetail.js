import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { updateBookProgress, updateBookCategory } from '../actions';
import { WANT_TO_READ, READING, COMPLETED } from '../static/books';
import SafeAreaView from 'react-native-safe-area-view';

class BookDetail extends Component {

  render() {
    const { params } = this.props.navigation.state;
    const { id } = params.book;
    book = this.props.books.find((book) => book.id === id);
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
        <Image
          source={{ uri: book.cover || coverPlaceHolder }}
          style={styles.cover}
        />
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.subtitle}>{book.author}</Text>
        <Text style={styles.subtitle}>{book.category}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.props.updateBookProgress({ ...book, progress: book.progress - 1 })}>
            <Text style={styles.progress}>Decrease</Text>
          </TouchableOpacity>
          <Text style={styles.progress}>
            {`${book.progress}/${book.pages} (${Math.round(book.progress * 100 / book.pages)}%)`}
          </Text>
          <TouchableOpacity onPress={() => this.props.updateBookProgress({ ...book, progress: book.progress + 1 })}>
            <Text style={styles.progress}>Increase</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 400,
    borderWidth: 1,
    padding: 5,
  },
  cover: {
    padding: 5,
    height: 260,
    width: 180,
  },
  title: {
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
  },
  progress: {
    margin: 5,
    fontSize: 24,
  },
});

const mapStateToProps = (state) => ({
  books: state.books.books,
});


const mapDispatchToProps = (dispatch) => ({
  updateBookProgress: (book) => updateBookProgress(book)(dispatch),
  updateBookCategory: (book) => updateBookCategory(book)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
