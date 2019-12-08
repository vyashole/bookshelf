import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon,
    Layout,
} from '@ui-kitten/components';
import { WANT_TO_READ, READING, COMPLETED } from '../static/books';

const refs = [React.createRef(), React.createRef(), React.createRef()]

const UnreadIcon = (style) => (
    <Icon {...style} name='bookmark' animation='pulse' ref={refs[0]} />
);

const ReadingIcon = (style) => (
    <Icon {...style} name='book-open' animation='pulse' ref={refs[1]} />
);

const ReadIcon = (style) => (
    <Icon {...style} name='book' animation='pulse' ref={refs[2]} />
);

export const CategoryPicker = ({ category, onSelectCategory }) => {

    const categories = [
        WANT_TO_READ,
        READING,
        COMPLETED,
    ];

    const onSelect = (index) => {
        refs[index].current.startAnimation();
        onSelectCategory(categories[index]);
    }

    return (
        <View>
            <BottomNavigation
                style={styles.bottomNavigation}
                appearance='noIndicator'
                selectedIndex={categories.indexOf(category)}
                onSelect={onSelect}>
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