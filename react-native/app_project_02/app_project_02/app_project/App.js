import { View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sala1 from './src/pages/rooms/room1/index';
import Sala2 from './src/pages/rooms/room2/index';
import Sala3 from './src/pages/rooms/room3/index';
import Sala4 from './src/pages/rooms/room4/index';
import Sala5 from './src/pages/rooms/room5/index';
import Sala6 from './src/pages/rooms/room6/index';
import Sala7 from './src/pages/rooms/room7/index';
import Sala8 from './src/pages/rooms/room8/index';
import Sala9 from './src/pages/rooms/room9/index';

import PortaSaida from './src/pages/exitDoor/index';
import Saida from './src/pages/exit/index';
import PuzzleAnswer from './src/pages/puzzleAnswer/index';
import PuzzleQuestion from './src/pages/puzzleQuestion/index';
import PuzzleMirror from './src/pages/puzzleMirror/index';
import PuzzleRorrim from './src/pages/puzzleRorrim/index';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Sala5">
        <Stack.Screen name="Sala1" component={Sala1} options={{headerShown: false}}  />
        <Stack.Screen name="Sala2" component={Sala2} options={{headerShown: false}} />
        <Stack.Screen name="Sala3" component={Sala3} options={{headerShown: false}} />
        <Stack.Screen name="Sala4" component={Sala4} options={{headerShown: false}} />
        <Stack.Screen name="Sala5" component={Sala5} options={{headerShown: false}} />
        <Stack.Screen name="Sala6" component={Sala6} options={{headerShown: false}} />
        <Stack.Screen name="Sala7" component={Sala7} options={{headerShown: false}} />
        <Stack.Screen name="Sala8" component={Sala8} options={{headerShown: false}} />
        <Stack.Screen name="Sala9" component={Sala9} options={{headerShown: false}} />

        <Stack.Screen name="PortaSaida" component={PortaSaida} options={{headerShown: false}} />
        <Stack.Screen name="Saida" component={Saida} options={{headerShown: false}} />
        <Stack.Screen name="PuzzleAnswer" component={PuzzleAnswer} options={{headerShown: false}} />
        <Stack.Screen name="PuzzleQuestion" component={PuzzleQuestion} options={{headerShown: false}} />
        <Stack.Screen name="PuzzleMirror" component={PuzzleMirror} options={{headerShown: false}} />
        <Stack.Screen name="PuzzleRorrim" component={PuzzleRorrim} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>  
 
  );
}
