import { View, Pressable, Text } from 'react-native'
import {styles} from './style'

function Botao(props){
  return(
    <View style={styles.contorno}>

      <Pressable onPress={props.funcao}>
        <Text style={styles.botao}> {props.texto} </Text>
      </Pressable>

    </View>
  )
}

export default Botao