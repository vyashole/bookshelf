import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import BookDetail from '../screens/BookDetail';
import BookSearch from '../screens/BookSearch';

export default AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Bookshelf',
    }),
  },
  Book: {
    screen: BookDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('book', { title: null }).title || 'Book Detail',
    }),
  },
  Search: {
    screen: BookSearch,
  },

}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});
