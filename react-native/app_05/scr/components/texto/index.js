import { View, TextInput} from 'react-native'
import {styles} from './style'

function Botao(props){
  return(
    <View style={styles.contorno}>

      <TextInput style={styles.insert}
        placeholder={props.texto}
        onChangeText={props.variavel}
      />

    </View>
  )
}

export default Botao