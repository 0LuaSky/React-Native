import { View, TextInput, Text, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import React, { useRef, useEffect } from 'react';
import {styles} from './style';
import Movemento from '../../components/move/index';
import Entrar from '../../components/enter/index';
import { useNavigation } from '@react-navigation/native';

const Centro = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null); // Referência ao ScrollView

  useEffect(() => {
    // Faz a rolagem para o meio quando o componente é montado
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 860, animated: false }); // Ajuste `x` para o ponto inicial desejado
    }
  }, []);

  const direita = () => {
    navigation.navigate('Sala2');
  }
  const baixo = () => {
    navigation.navigate('Sala4');
  }

  const entrar1 = () => {
    navigation.navigate('Adivinhacao');
  }
  const entrar2 = () => {
    navigation.navigate('Areaapi');
  }
  const entrar3 = () => {
    navigation.navigate('Magica');
  }
  const entrar4 = () => {
    navigation.navigate('Pocosemfundo');
  }

  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <ImageBackground source={{uri: 'https://static.vecteezy.com/ti/vetor-gratis/t2/43502661-desenho-animado-circo-arena-volta-etapa-debaixo-letreiro-cupula-com-assentos-bandeiras-e-holofotes-para-entretenimento-desempenho-ou-carnaval-mostrar-esvaziar-interior-dentro-ou-carnaval-anel-do-cirque-barraca-com-cena-vetor.jpg',}} style={styles.backgroundImage}>
        <View style={styles.overlay} />
        

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ref={scrollViewRef}>
          <View style={styles.main}>    

            <View style={styles.content}>
              <ImageBackground source={{uri: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7172.png',}} style={styles.backgroundImage}>

              <Text style={[styles.titulo, {marginTop:130}]}>
                Jogo da adivinhação
              </Text>
              <Text style={[styles.titulo, {marginTop:100}]}>
                <Text onPress={entrar1}>{'Entrar'}</Text>
              </Text>
              </ImageBackground>
            </View>

            <View style={styles.content}>
              <ImageBackground source={{uri: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7172.png',}} style={styles.backgroundImage}>

              <Text style={[styles.titulo, {marginTop:130}]}>
                Area da api
              </Text>
              <Text style={[styles.titulo, {marginTop:100}]}>
                <Text onPress={entrar2}>{'Entrar'}</Text>
              </Text>
              </ImageBackground>
            </View>

            <View style={styles.centercontent}>
              <ImageBackground source={{uri: 'https://i.pinimg.com/originals/9e/5f/7d/9e5f7dd16441259ee6fcb65b1d28ce20.png',}} style={styles.backgroundImage}>

              <Text style={[styles.texto, {marginTop: 250}]}>
                esquerda -- Jogo da adivinhação
              </Text>
              <Text style={styles.texto}>
                esquerda -- Area da api
              </Text>
              <Text style={styles.texto}>
                Show de magica -- direita
              </Text>
              <Text style={[styles.texto, {marginBottom: 'auto'}]} >
                poço (quase) sem fundo -- direita
              </Text>

              </ImageBackground>
            </View>

            <View style={styles.content}>
              <ImageBackground source={{uri: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7172.png',}} style={styles.backgroundImage}>

              <Text style={[styles.titulo, {marginTop:130}]}>
                Show de magica
              </Text>
              <Text style={[styles.titulo, {marginTop:100}]}>
                <Text onPress={entrar3}>{'Entrar'}</Text>
              </Text>
              </ImageBackground>
            </View>

            <View style={styles.content}>
              <ImageBackground source={{uri: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7172.png',}} style={styles.backgroundImage}>

              <Text style={[styles.titulo, {marginTop:130}]}>
                Poço (quase) sem fundo
              </Text>
              <Text style={[styles.titulo, {marginTop:100}]}>
                <Text onPress={entrar4}>{'Entrar'}</Text>
              </Text>
              </ImageBackground>
            </View>

          </View>           
        </ScrollView>

      </ImageBackground>

    </View>
  )

}

export default Centro;