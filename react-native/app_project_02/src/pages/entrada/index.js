import {View, Text, ImageBackground, TextInput} from 'react-native';
import {styles } from './style.js';

import { useNavigation } from '@react-navigation/native';

const Entrada = () => {
  const navigation = useNavigation();

  const entrar = () => {
    navigation.navigate('Centro');
  }

  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <ImageBackground source={{uri: 'https://img.freepik.com/vetores-premium/a-entrada-do-circo-com-uma-cortina-vermelha-fechada_43633-5974.jpg',}} style={styles.backgroundImage}>
      
      <View style={styles.overlay} />
      
        <View style={styles.main}>


          <Text style={styles.titulo}>
            Circo dos perigosos
          </Text>
          
          <Text style={styles.texto}>
            Bem-vindo ao Circo dos Perigosos! Venha e aproveite nossas atrações estupendas e emocionantes!
          </Text>

          
        <Text style={styles.texto}>
          <Text onPress={entrar}>{'Entrar'}</Text>
        </Text>


        </View>
      </ImageBackground>
    </View>
  )
}

export default Entrada;