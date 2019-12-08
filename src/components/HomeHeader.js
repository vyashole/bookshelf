
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

const BookIcon = (style) => (
    <Icon {...style} name='book-open-outline' />
);

const BookAction = (props) => (
    <TopNavigationAction {...props}
        disabled={true}
        icon={BookIcon} />
);

export const HomeHeader = () => {
    const renderRightControls = () => [
        <SearchAction />,
    ];

    return (
        <TopNavigation
            title='Bookshelf'
            leftControl={<BookAction />}
            rightControls={renderRightControls()}
        />
    );
};
