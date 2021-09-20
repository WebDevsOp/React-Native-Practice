import ComponentScreen from './screens/ComponentScreen';
import FlatListScreen from './screens/FlatList'
import {createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

const navigator = createStackNavigator(
  {
    Components : ComponentScreen,
    List : FlatListScreen,
  },
  {
    initialRouteName : 'List',
    defaultNavigationOptions:{
      title: 'List'
    }
  }
);

export default createAppContainer(navigator);