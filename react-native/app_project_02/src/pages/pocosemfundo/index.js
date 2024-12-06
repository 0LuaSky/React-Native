import {View, Text, ImageBackground, ScrollView} from 'react-native';
import {styles } from './style.js';
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

const Entrada = () => {
  const navigation = useNavigation();

  var [ferrou, setferrou] = useState('\n')
  var [i, seti] = useState(0)

  const sair = () => {
    navigation.goBack();
  }

  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>  
        <ImageBackground source={{uri: 'https://img.freepik.com/vetores-premium/a-entrada-do-circo-com-uma-cortina-vermelha-fechada_43633-5974.jpg',}} style={styles.backgroundImage}>
          <View style={styles.overlay} />

          <View style={styles.main}>


            <Text style={styles.titulo}>
              Poço sem fundo
            </Text>
            
            <Text style={styles.texto}>
              Desça com cuidado, o poço é muito fundo e talvez você não volte.
            </Text>
  
            <Text style={styles.texto}>
              <Text onPress={sair}>{'Voltar'}</Text>
            </Text>

            
          </View>
          <View style={styles.main}>
<Text style={styles.fundo}>
              {ferrou}
            </Text>
            <Text style={styles.fundo}>
              parabems, parece que voce chegou ao fundo... valeu a pena? voce sabe que voce vai ter que voltar tudo de novo né?
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

export default Entrada;