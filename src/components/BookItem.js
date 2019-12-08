import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Spinner } from '@ui-kitten/components'
import { Image } from 'react-native-elements'
import ProgressBar from 'react-native-progress/Bar';

import { GlobalStyles, Color } from '../theme';
const coverPlaceHolder = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/223/green-book_1f4d7.png';

const BookItem = ({ book }) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: book.cover || coverPlaceHolder,
      }}
      containerStyle={GlobalStyles.bookCover}
      placeholderStyle={GlobalStyles.bookCover}
      PlaceholderContent={<Spinner status='primary' />}
    />
    <ProgressBar
      width={null}
      animated={false}
      progress={book.progress / book.pages}
      color={Color.primary}
      unfilledColor={Color.backgroundSecondary}
      borderWidth={0}
      style={styles.progress}
    />
    <Text style={styles.label} category='s1'>{book.title}</Text>
    <Text style={styles.label} category='p2'>{book.author}</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },
  label: {
    width: 260 / 1.5
  },
  progress: {
    marginTop: 4,
  },
});


export default BookItem;
