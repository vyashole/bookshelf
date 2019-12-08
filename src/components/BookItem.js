import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Spinner } from '@ui-kitten/components'
import { Image } from 'react-native-elements'
import ProgressBar from 'react-native-progress/Bar';

import { GlobalStyles, Color } from '../theme';
const coverPlaceHolder = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/223/green-book_1f4d7.png';

const BookItem = ({ book, appearance = 'large' }) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: book.cover || coverPlaceHolder,
      }}
      containerStyle={appearance == 'small' ? GlobalStyles.bookCoverSmall : GlobalStyles.bookCoverLarge}
      placeholderStyle={appearance == 'small' ? GlobalStyles.bookCoverSmall : GlobalStyles.bookCoverLarge}
      PlaceholderContent={<Spinner status='primary' />}
    />
    <ProgressBar
      width={appearance == 'small' ? 173 : 260}
      animated={false}
      progress={book.progress / book.pages}
      color={Color.primary}
      unfilledColor={Color.backgroundSecondary}
      borderWidth={0}
      style={styles.progress}
    />
    <Text style={styles.label} category={appearance == 'small' ? 's1' : 'h4'}>{book.title}</Text>
    <Text style={styles.label} category={appearance == 'small' ? 'p2' : 'p1'}>{book.author}</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: "center",
  },
  label: {
    textAlign: "center",
  },
  progress: {
    marginTop: 4,
  },
});


export default BookItem;
