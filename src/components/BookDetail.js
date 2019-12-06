import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { updateBook } from '../actions'
import { WANT_TO_READ, READING, COMPLETED } from '../static/books'

class BookDetail extends Component {

    increaseProgress = (book) => {
        this.props.updateBook({
            ...book,
            progress: book.progress + 1 >= book.pages ? book.pages : book.progress + 1,
            category: book.progress + 1 >= book.pages ? COMPLETED : READING
        })
    }
    decreaseProgress = (book) => {
        this.props.updateBook({
            ...book,
            progress: book.progress - 1 <= 0 ? 0 : book.progress - 1,
            category: book.progress - 1 <= 0 ? WANT_TO_READ : READING
        })
    }
    updateCategory = (book, category) => {
        switch (category) {
            case WANT_TO_READ:
                this.props.updateBook({ ...book, progress: 0, category })
                break
            case READING:
                this.props.updateBook({ ...book, category })
                break
            case COMPLETED:
                this.props.updateBook({ ...book, progress: book.pages, category })
                break
        }
    }

    render() {
        const { params } = this.props.navigation.state
        const { id } = params.book
        book = this.props.books.find(book => book.id === id)
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri: book.cover || coverPlaceHolder
                    }}
                    style={styles.cover}
                />
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.subtitle}>{book.author}</Text>
                <Text style={styles.subtitle}>{book.category}</Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => this.decreaseProgress(book)}><Text style={styles.progress}>Decrease</Text></TouchableOpacity>
                    <Text style={styles.progress}>{book.progress} / {book.pages}
                        ({Math.round(book.progress * 100 / book.pages) + '%'})
                     </Text>
                    <TouchableOpacity onPress={() => this.increaseProgress(book)}><Text style={styles.progress}>Increase</Text></TouchableOpacity>

                </View></View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: 400,
        borderWidth: 1,
        padding: 5
    },
    cover: {
        padding: 5,
        height: 260,
        width: 180
    },
    title: {
        fontSize: 14
    },
    subtitle: {
        fontSize: 12
    },
    progress: {
        margin: 5,
        fontSize: 24
    }
})

const mapStateToProps = (state) => {
    return {
        books: state.books.books
    }
}


const mapDispatchToProps = dispatch => ({
    updateBook: (book) => updateBook(book)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)
