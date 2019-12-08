import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { updateBookProgress, updateBookCategory } from '../actions';
import { WANT_TO_READ, READING, COMPLETED } from '../static/books';
import SafeAreaView from 'react-native-safe-area-view';
import { BookDetailHeader } from '../components/BookDetailHeader';
import { CategoryPicker } from '../components/CategoryPicker';
import BookItem from '../components/BookItem';
import { ScrollView } from 'react-native-gesture-handler';

class BookDetail extends Component {

  onSelectCategory = (category) => {
    this.props.updateBookCategory({ ...book, category })
  }

  render() {
    const { params } = this.props.navigation.state;
    const { id } = params.book;
    book = this.props.books.find((book) => book.id === id);
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
        <BookDetailHeader onBackPress={() => this.props.navigation.goBack()} />
        <ScrollView>
          <View style={styles.bookContainer}>
            <BookItem book={book} />
          </View>
          <CategoryPicker
            category={book.category}
            onSelectCategory={this.onSelectCategory}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: 5,
  },
  cover: {
    padding: 5,
    height: 260,
    width: 180,
  },
  progress: {
    margin: 5,
    fontSize: 24,
  },
  bookContainer: {
    alignItems: "center",
    paddingHorizontal: 8
  }
});

const mapStateToProps = (state) => ({
  books: state.books.books,
});


const mapDispatchToProps = (dispatch) => ({
  updateBookProgress: (book) => updateBookProgress(book)(dispatch),
  updateBookCategory: (book) => updateBookCategory(book)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
