import {View, Text, ImageBackground, ScrollView} from 'react-native';
import {styles } from './style.js';
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

const Pocosemfundo = () => {
  const navigation = useNavigation();

  var [ferrou, setferrou] = useState('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
  var [i, seti] = useState(0)

  const sair = () => {
    navigation.goBack();
  }

  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>  
        <ImageBackground source={{uri: 'https://img.freepik.com/vetores-premium/a-entrada-do-circo-com-uma-cortina-vermelha-fechada_43633-5974.jpg',}} style={[styles.backgroundImage, {height:500}]}>
          <View style={styles.overlay} />

          <View style={[styles.main, {height:500}] }>


            <Text style={[styles.titulo, {marginTop:30, marginBottom:30}]}>
              Poço sem fundo
            </Text>
            
            <Text style={[styles.texto, {marginTop:30, marginBottom:30}]}>
              Desça com cuidado, o poço é muito fundo e talvez você não volte.
            </Text>
  
            <Text style={[styles.texto, {marginTop:30, marginBottom:30}]}>
              <Text onPress={sair}>{'Voltar'}</Text>
            </Text>

            
          </View>
        </ImageBackground>
          <View style={styles.main}>
            <Text style={styles.fundo}>
              {ferrou}
              {ferrou}
              {ferrou}
              Ainda da tempo de voltar
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              voce não vai desistir né?
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              parabem, voce chegou so na metade
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
              {ferrou}
            </Text>
            <Text style={styles.fundo}>
              Parabéns, parece que voce chegou ao fundo... valeu a pena? voce sabe que voce vai ter que voltar tudo de novo né?
            </Text>
          </View>
      </ScrollView>
    </View>
  )
}

export default Pocosemfundo;