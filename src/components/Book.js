import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'

export class Book extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text> {this.props.book.title} </Text>
                <Image
                    source={{
                        uri: this.props.book.cover
                    }}
                    style={styles.cover}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const styles = StyleSheet.create({
    cover: {
        flex: 1,
        padding: 5,
        height: 100
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Book)
