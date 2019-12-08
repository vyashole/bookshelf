import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Text } from '@ui-kitten/components'
import { updateBookProgress, updateBookCategory } from '../actions';
import SafeAreaView from 'react-native-safe-area-view';
import { BookDetailHeader } from '../components/BookDetailHeader';
import { CategoryPicker } from '../components/CategoryPicker';
import BookItem from '../components/BookItem';
import { ScrollView } from 'react-native-gesture-handler';
import Stepper from '../components/Stepper';

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
            <Text style={{ marginTop: 10 }} category='label'>READ STATUS</Text>
          </View>
          <CategoryPicker
            category={book.category}
            onSelectCategory={this.onSelectCategory}
          />
          <View style={styles.bookContainer}>
            <Text style={{ marginTop: 10, marginBottom: 5 }} category='label'>READ PROGRESS</Text>
            <Stepper
              currentValue={book.progress}
              maxValue={book.pages}
              onIncrease={() => this.props.updateBookProgress({ ...book, progress: book.progress + 1 })}
              onDecrease={() => this.props.updateBookProgress({ ...book, progress: book.progress - 1 })}
            />
          </View>
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
