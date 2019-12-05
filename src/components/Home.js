import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { BOOKS } from '../static/books'
import Book from './Book'

export default class Home extends Component {

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Book book={item} />
      </View>
    );
  }

  keyExtractor = book => book.id.toString()

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={BOOKS}
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
    margin: 5
  }

});
