
import React from 'react';
import {
    Icon,
    TopNavigation,
    TopNavigationAction,
    Text,
} from '@ui-kitten/components';


const SearchIcon = (style) => (
    <Icon {...style} name='search' />
);

const SearchAction = (props) => (
    <TopNavigationAction {...props} icon={SearchIcon} />
);

export const HomeHeader = () => {
    const renderRightControls = () => [
        <SearchAction />,
    ];

    return (
        <TopNavigation
            title='Bookshelf'
            rightControls={renderRightControls()}
        />
    );
};
