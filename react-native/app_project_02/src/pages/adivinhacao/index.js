import {View, Text, ImageBackground, Pressable, TextInput, TouchableOpacity} from 'react-native';
import {styles } from './style.js';
import React, { useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

const Advinhacao = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState()
  const [input, setInput] = useState()

  useEffect( () => {
    const recuperarNome = async () => {
      const nomeUsuario = await AsyncStorage.getItem('nome')
      setNome(nomeUsuario)    
    };
    recuperarNome();
  }, []);


  const gravaNome = async () => {
    setNome(input)
    await AsyncStorage.setItem('nome', input);
    Keyboard.dismiss();
    alert('Salvo com sucesso!');
  }


  const sair = () => {
    navigation.goBack();
  }

  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <ImageBackground source={{uri: 'https://i.pinimg.com/564x/8d/59/3b/8d593bce501e09ff72545f8342cf797c.jpg',}} style={styles.backgroundImage}>    
      <View style={styles.overlay} />
      
        <View style={styles.main}>

            <Text style={styles.titulo}>
              Adivinhe o pokemon
            </Text>
            
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={(texto) => setInput(texto)}
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity onPress={gravaNome}>
              <Text style={styles.botao}>+</Text>
            </TouchableOpacity>

            <Text style={styles.nome}>{nome}</Text>


            <Text style={styles.texto}>
              <Text onPress={sair}>{'Voltar'}</Text>
            </Text>


        </View>
      </ImageBackground>
    </View>
  )
}

export default Advinhacao;