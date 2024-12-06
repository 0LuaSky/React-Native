import {View, Text} from 'react-native';
import {styles } from './style.js';
import {useState} from 'react';

import { useNavigation } from '@react-navigation/native';

const Saida = () => {
  const navigation = useNavigation();

  
  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <View style={styles.main}>

        <Text style={styles.titulo}>
          Parabéns você escapou!!!
        </Text>
        
        <Text style={styles.texto}>
          Apos você colocar a senha correta a porta se abriu, revelando uma saida daquele estranho labirinto.
        </Text>
        <Text style={styles.texto}>
          Obrigada por jogar S2
        </Text>

      </View>
    </View>
  )
}

export default Saida;