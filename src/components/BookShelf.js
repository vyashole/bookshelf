import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, FlatList } from 'react-native'
import BookItem from './BookItem';
import { Text } from '@ui-kitten/components';


export default class BookShelf extends Component {
    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.props.bookPressHandler(item)} style={styles.item}>
            <BookItem book={item} appearance='small' />
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
                contentContainerStyle={styles.container}
                onRefresh={this.props.onRefresh}
                refreshing={false}
                ListEmptyComponent={<Text style={{ textAlign: "center", padding: 20 }} category='p1'>No books found!</Text>}
            />
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        paddingHorizontal: 8,
        maxWidth: 200
    },
    container: {
        alignSelf: "stretch",
        justifyContent: "space-around"
    }
})

