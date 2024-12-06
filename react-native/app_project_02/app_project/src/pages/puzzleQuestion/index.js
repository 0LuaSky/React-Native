import {View, Text} from 'react-native';
import {styles } from './style.js';
import {useState} from 'react';
import Botao from '../../components/butom/index';
import Insert from '../../components/insert/index';
import { useNavigation } from '@react-navigation/native';

const PuzzleQuestion = () => {
  const navigation = useNavigation();

  var [num1] = useState(Math.floor(Math.random() * 10))
  var [num2] = useState(Math.floor(Math.random() * 10))
  var [num3] = useState(num1*num2)

  var [resp1, setResp1] = useState(0)
  var [resp2, setResp2] = useState(0)

  var [result, setresult] = useState();
  var [code, setcode] = useState();


  const voltar = () => {
    navigation.navigate('Sala3');
  }

  const entrar = () => {
    if((resp1*resp2) == num3){
      setresult("Correto")
      setcode("2º digito: 1")
      
    }else{
      setresult("Erro! " + resp1 + " * " + resp2 + " Não dá " + num3)
      setcode()
    }
  }


  
  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <View style={styles.main}>

        <Text style={styles.titulo}>
          Descubra o calculo
        </Text>

        <View style={styles.grid}>
          <Text style={[styles.numb, {borderBottomWidth:3}]}>
            <Insert style={{color:'white'}} variavel={setResp1}/>
          </Text>

          <Text style={styles.numb}> * </Text> 

          <Text style={[styles.numb, {borderBottomWidth:3}]}>
            <Insert style={{color:'white'}} variavel={setResp2}/>
          </Text>
          <Text style={styles.numb}> = </Text>
          <Text style={[styles.numb, {borderBottomWidth:3, height:50}]}>
            {num3}
          </Text>

          <Text style={styles.resp}>
            {result} 
            {"\n"}
            {code} 
        
          </Text>

        </View>


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

export default PuzzleQuestion;