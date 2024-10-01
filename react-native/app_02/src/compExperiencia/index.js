import { View, Text } from 'react-native';
import {styles} from './style'


function Componente01(){
  return(
    <View style={[styles.area]}>
      <Text style={[styles.textoTitulo]}>
         EXPERIENCIA:
      </Text>  
      <Text style={[styles.texto]}>
        Nenhuma ,_,
      </Text>
    </View>
  )
}

export default Componente01;