import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import BookDetail from '../screens/BookDetail';

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

}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});
