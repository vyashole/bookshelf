
import React from 'react';
import {
    Icon,
    TopNavigation,
    TopNavigationAction,
    Text,
} from '@ui-kitten/components';

const BackIcon = (style) => (
    <Icon {...style} name='arrow-ios-back' />
);

const BackAction = (props) => (
    <TopNavigationAction {...props}
        icon={BackIcon} />
);

export const BookDetailHeader = ({ onBackPress }) => {
    return (
        <TopNavigation
            title='Book Details'
            alignment='center'
            leftControl={<BackAction onPress={onBackPress} />}
        />
    );
};
