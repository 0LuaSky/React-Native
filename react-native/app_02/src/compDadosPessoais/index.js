import { View, Text } from 'react-native';
import {styles} from './style'


function Componente01(){
  return(
    <View style={[styles.area]}>
      <Text style={[styles.textoTitulo]}>
        INFORMAÇÕES PESSOAIS:
      </Text>  
      <Text style={[styles.texto]}>
        Nome:       Luana Honorato Rodrigues.{'\n'}
        Idade:        20.{'\n'}
        Gênero:     Feminino.{'\n'}
        Profissão: Garota de programa.
      </Text>
    </View>
  )
}

export default Componente01;
