import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const icon = require('../../assets/icon.png')
const coverPlaceHolder = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/223/green-book_1f4d7.png'
export class Book extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri: this.props.book.cover || coverPlaceHolder
                    }}
                    loadingIndicatorSource={icon}
                    style={styles.cover}
                />
                <Text style={styles.title}> {this.props.book.title} </Text>
                <Text style={styles.author}> {this.props.book.author} </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 5
    },
    cover: {
        flex: 1,
        padding: 5,
        height: 260,
        width: 180
    },
    title: {
        fontSize: 14
    },
    author: {
        fontSize: 12
    }
})


export default Book
