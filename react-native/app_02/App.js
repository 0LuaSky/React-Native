import { View, Text, Image } from 'react-native';


import CompImage from './src/compImages'
import CompDadosPessoais from './src/compDadosPessoais'
import CompFormcao from './src/compFormacao'
import CompExperiencia from './src/compExperiencia'
import CompProjetos from './src/compProjetos'


const App = () => {
  return (
        <View style={{background: 'linear-gradient(#273142, white)'}}>
 

      <CompImage />
      <CompDadosPessoais />
      <CompFormcao />
      <CompExperiencia />
      <CompProjetos />
    </View>
  );
}


export default App;