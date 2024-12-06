import {View, Text} from 'react-native';
import {styles } from './style.js';
import {useState} from 'react';
import Botao from '../../components/butom/index';
import Insert from '../../components/insert/index';
import { useNavigation } from '@react-navigation/native';

const PuzzleAnswer = () => {
  const navigation = useNavigation();


  var [num1] = useState(Math.floor(Math.random() * 10))
  var [num2] = useState(Math.floor(Math.random() * 10))
  var [resp, setresp] = useState('')
  var [result, setresult] = useState('')
  var [code, setcode] = useState('')


  const voltar = () => {
    navigation.navigate('Sala1');
  }
  const entrar = () => {
    if(num1+num2 == resp){
      setresult("Correto")
      setcode("1º digito: 0")
      
    }else{
      setresult("Errado!")
      setcode("")
    }
  }


  
  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <View style={styles.main}>

        <Text style={styles.titulo}>
          Descubra a resposta
        </Text>

        <View style={styles.grid}>
          <Text style={[styles.numb, {borderBottomWidth:3}]}> {num1} </Text>
          <Text style={styles.numb}> + </Text>
          <Text style={[styles.numb, {borderBottomWidth:3}]}> {num2} </Text>
          <Text style={styles.numb}> = </Text>
          <Text style={[styles.numb, {borderBottomWidth:3, height:50}]}>
            <Insert style={{color:'white'}} variavel={setresp}/>
          </Text>
        </View>

        <Text style={styles.resp}>
          {result} 
          {"\n"}
          {code} 
        
        </Text>


        <View style={styles.grid}>
          <View grid1 style={styles.verify}>
            <Botao funcao={voltar} conteudo='Voltar'/>
          </View>
          <View grid1 style={styles.verify}>
            <Botao funcao={entrar} conteudo='Entrar'/>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PuzzleAnswer;