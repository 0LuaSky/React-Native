import { View, TextInput, Text, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {style} from './style';

function Botao(props){
  const navigation = useNavigation();
  
  return(
    <View>

      <Pressable onPress={props.funcao}>
        <Text style={{color:'white', fontSize: 50,}}>
          {props.texto} 
          
        </Text>
      </Pressable>
      

    </View>
  )
}

export default Botao