import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import Movemento from '../../../components/move/index';
import Entrar from '../../../components/enter/index';
import { useNavigation } from '@react-navigation/native';

const Sala3 = () => {
  const navigation = useNavigation();

  const esquerda = () => {
    navigation.navigate('Sala2');
  }
  const baixo = () => {
    navigation.navigate('Sala6');
  }
  const entrar = () => {
    navigation.navigate('PuzzleQuestion');
  }

  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>

      <Text style={styles.titulo}>
        O Labirinto
      </Text>
      
      <View style={styles.main}>

        <View grid1 style={styles.grid}>
          <Text style={styles.texto}>
            SALA 3
          </Text>
        </View>

        <View grid2 style={styles.grid}>
        </View>

        <View grid3 style={styles.grid}>

        </View>

        <View grid4 style={styles.grid}>
          <Text style={styles.texto}>
            <Movemento texto="<" funcao={esquerda} />
          </Text>
        </View>

        <View grid5 style={styles.grid}>
          <Text style={styles.texto}> 
            <Entrar funcao={entrar} texto='Entrar'/>
          </Text>
        </View>

        <View grid6 style={styles.grid}>

        </View>

        <View grid7 style={styles.grid}>

        </View>

        <View grid8 style={styles.grid}>
          <Text style={styles.texto}>
            <Movemento texto="\/" funcao={baixo} />
          </Text>
        </View>

        <View grid9 style={styles.grid}>

        </View>       

      </View>
    </View>
  )

}

export default Sala3;