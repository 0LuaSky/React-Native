import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Entrada from './src/pages/entrada/index';
import Centro from './src/pages/centro/index';

import Areaapi from './src/pages/api/index';
import Magica from './src/pages/magica/index';
import Pocosemfundo from './src/pages/pocosemfundo/index';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Entrada">
      
        <Stack.Screen name="Entrada" component={Entrada} options={{headerShown: false}} />  
        <Stack.Screen name="Centro" component={Centro} options={{headerShown: false}}  />

        <Stack.Screen name="Areaapi" component={Areaapi} options={{headerShown: false}} />
        <Stack.Screen name="Magica" component={Magica} options={{headerShown: false}} />
        <Stack.Screen name="Pocosemfundo" component={Pocosemfundo} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>  
 
  );
}