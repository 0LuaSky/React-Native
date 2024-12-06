import {View, Text, ImageBackground, Pressable} from 'react-native';
import {styles } from './style.js';
import { useState } from 'react'

import { useNavigation } from '@react-navigation/native';

const Entrada = () => {
  const navigation = useNavigation();

  const [copo1, setcopo1] = useState('/\\\n/     \\\n/______\\\n|_______|')
  const [copo2, setcopo2] = useState('/\\\n/     \\\n/______\\\n|_______|')
  const [copo3, setcopo3] = useState('/\\\n/     \\\n/______\\\n|_______|')
  const [copo4, setcopo4] = useState('/\\\n/     \\\n/______\\\n|_______|')
  const [copo5, setcopo5] = useState('/\\\n/     \\\n/______\\\n|_______|')
  
  function some1(){
    setcopo1('')
  }
  function some2(){
    setcopo2('')
  }
  function some3(){
    setcopo3('')
  }
  function some4(){
    setcopo4('')
  }
  function some5(){
    setcopo5('')
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
              Show de magica
            </Text>
            
            <View style={styles.content}>
              <Pressable onPress={some1}>
                <Text style={[styles.copo, {color:'blue'}]}> {copo1} </Text>
              </Pressable>

              <Pressable onPress={some2}>
                <Text style={[styles.copo, {color:'red'}]}> {copo2} </Text>
              </Pressable>

              <Pressable onPress={some3}>
                <Text style={[styles.copo, {color:'yellow'}]}> {copo3} </Text>
              </Pressable>

              <Pressable onPress={some4}>
                <Text style={[styles.copo, {color:'green'}]}> {copo4} </Text>
              </Pressable>

              <Pressable onPress={some5}>
                <Text style={[styles.copo, {color:'pink'}]}> {copo5} </Text>
              </Pressable>

            </View>

            


            <Text style={styles.texto}>
              <Text onPress={sair}>{'Voltar'}</Text>
            </Text>


        </View>
      </ImageBackground>
    </View>
  )
}

export default Entrada;