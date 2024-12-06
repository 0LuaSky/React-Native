import { View, TextInput} from 'react-native'
import {styles} from './style'

function Insert(props){
  return(
    <View >

      <TextInput style={styles.insert}
        placeholder={props.texto}
        onChangeText={props.variavel}
      />

    </View>
  )
}

export default Insert