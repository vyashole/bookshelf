import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
    Layout,
} from '@ui-kitten/components';
import { WANT_TO_READ, READING, COMPLETED } from '../static/books';

const UnreadIcon = (style) => (
    <Icon {...style} name='bookmark' />
);

const ReadingIcon = (style) => (
    <Icon {...style} name='book-open' />
);

const ReadIcon = (style) => (
    <Icon {...style} name='book' />
);

export const CategoryPicker = ({ category, onSelectCategory }) => {

    const categories = [
        WANT_TO_READ,
        READING,
        COMPLETED,
    ];

    return (
        <View>
            <BottomNavigation
                style={styles.bottomNavigation}
                appearance='noIndicator'
                selectedIndex={categories.indexOf(category)}
                onSelect={index => onSelectCategory(categories[index])}>
                <BottomNavigationTab title='UNREAD' icon={UnreadIcon} />
                <BottomNavigationTab title='READING' icon={ReadingIcon} />
                <BottomNavigationTab title='READ' icon={ReadIcon} />
            </BottomNavigation>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomNavigation: {
        marginVertical: 8,
    },
});