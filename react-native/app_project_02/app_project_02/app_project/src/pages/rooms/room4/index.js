import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import Movemento from '../../../components/move/index';
import { useNavigation } from '@react-navigation/native';

const Sala4 = () => {
  const navigation = useNavigation();


  const cima = () => {
    navigation.navigate('Sala1');
  }
  const direita = () => {
    navigation.navigate('Sala5');
  }
  const baixo = () => {
    navigation.navigate('Sala7');
  }

  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>

      <Text style={styles.titulo}>
        O Labirinto
      </Text>
      
      <View style={styles.main}>

        <View grid1 style={styles.grid}>
          <Text style={styles.texto}>
            SALA 4
          </Text>
        </View>

        <View grid2 style={styles.grid}>
          <Text style={styles.texto}>
            <Movemento syze ='500' texto="/\" funcao={cima}  />
          </Text>
        </View>

        <View grid3 style={styles.grid}>

        </View>

        <View grid4 style={styles.grid}>
        </View>

        <View grid5 style={styles.grid}>

        </View>

        <View grid6 style={styles.grid}>
          <Text style={styles.texto}>
            <Movemento texto=">" funcao={direita} />
          </Text>
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

export default Sala4;