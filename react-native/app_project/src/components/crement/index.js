import { View, Pressable, Text} from 'react-native'
import {styles} from './style'

function Crement(props){
  return(
    <View style={styles.contorno}>

      <Pressable onPress={props.funcao}>
        <Text style={styles.botao}>{props.conteudo}</Text>
      </Pressable>

    </View>
  )
}

export default Crement