import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, FlatList } from 'react-native'
import BookItem from './BookItem';


export default class BookShelf extends Component {
    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.props.bookPressHandler(item)} style={styles.item}>
            <BookItem book={item} />
        </TouchableOpacity>
    )

    keyExtractor = (book) => book.id.toString()

    render() {
        return (
            <FlatList
                data={this.props.books}
                numColumns={2}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        margin: 8,
    },
})

