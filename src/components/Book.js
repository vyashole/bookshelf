import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

const coverPlaceHolder = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/223/green-book_1f4d7.png';

const Book = ({ book }) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: book.cover || coverPlaceHolder,
      }}
      style={styles.cover}
    />
    <Text style={styles.title}>
      {' '}
      {book.title}
      {' '}
    </Text>
    <Text style={styles.author}>
      {' '}
      {book.author}
      {' '}
    </Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 5,
  },
  cover: {
    flex: 1,
    padding: 5,
    height: 260,
    width: 180,
  },
  title: {
    fontSize: 14,
  },
  author: {
    fontSize: 12,
  },
});


export default Book;
