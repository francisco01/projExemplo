

import { createAppContainer, createStackNavigator } from 'react-navigation';
import People from './src/pages/People';
import PeopleDetail from './src/pages/PeopleDetail';

const AppNavigator = createStackNavigator({
    'Main': {
        screen: People
    },
    'PeopleDetail': {
        screen: PeopleDetail,
        
    }

}, {
        defaultNavigationOptions: {
            title: 'Pessoas!',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 30,

                flexGrow: 1,
                textAlign: 'center'
            }
        }
    }

);

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer;



