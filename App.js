import ComponentScreen from './src/screens/ComponentScreen';
import FlatListScreen from './src/screens/FlatList'
import HomeScreen from './src/screens/HomeScreen'
import ImageScreen from './src/screens/ImageScreen'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const navigator = createStackNavigator(
  {
    Components: ComponentScreen,
    List: FlatListScreen,
    Home: HomeScreen,
    ImageScreen: ImageScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'List'
    }
  }
);

export default createAppContainer(navigator);