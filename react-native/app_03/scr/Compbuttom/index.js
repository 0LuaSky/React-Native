import React, { useState } from 'react';
import { View, Text, Button, Pressable} from 'react-native';
import {styles} from './style'

export default function App(){
  var [number, count] = useState(0)

  function soma(){
    count((number + 1))
  }
  
  function subtrai(){
    if (number > 0){
      count((number - 1))
    }
  
  }

  
    return(
    <View style={[styles.area]}>
      <Text style={[styles.textoTitulo]}>
        Contador de pessoas.
      </Text>

      <Pressable onPress={soma}>
        <Text style={[styles.botao, {backgroundColor: 'green'}]}>/\</Text>
      </Pressable>

      <Text style={[styles.contador]}>
        {number}
      </Text>

      <Pressable onPress={subtrai}>
        <Text style={[styles.botao, {backgroundColor: 'red'}]}>\/</Text>
      </Pressable>
        
      </View>
    )
      

  
}