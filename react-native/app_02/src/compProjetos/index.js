import { View, Text } from 'react-native';
import {styles} from './style'


function Componente01(){
  return(
    <View style={[styles.area]}>
      <Text style={[styles.textoTitulo]}>
         PROJETOS:
      </Text>  
      <Text style={[styles.texto]}>
        Laugh tower https://github.com/0LuaSky/Laugh-tower {'\n'}
      </Text>
    </View>
  )
}

export default Componente01;