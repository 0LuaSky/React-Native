import { View, TextInput, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {style} from './style';

function Botao(props){
  
  return(
    <View>

      <Pressable onPress={props.funcao}>
        <Text style={{color:'white'}}>
          {props.texto} 
          
        </Text>
      </Pressable>
      

    </View>
  )
}

export default Botao