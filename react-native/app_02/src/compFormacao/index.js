import { View, Text } from 'react-native';
import {styles} from './style'


function Componente01(){
  return(
    <View style={[styles.area]}>
      <Text style={[styles.textoTitulo]}>
        FORMAÇÃO:
      </Text>  
      <Text style={[styles.texto]}>
        Analise e desenvolviemto - ads 2025 2° semestre
      </Text>
    </View>
  )
}

export default Componente01;