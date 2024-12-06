import {View, Text} from 'react-native';
import {styles } from './style.js';
import {useState} from 'react';
import Botao from '../../components/butom/index';
import Insert from '../../components/insert/index';
import { useNavigation } from '@react-navigation/native';

const PuzzleRorrim = () => {
const navigation = useNavigation();

  var [num1, setnum1] = useState(0)
  var [num2, setnum2] = useState(0)
  var [num3, setnum3] = useState(0)
  var [num4, setnum4] = useState(0)
  var [result, setresult] = useState();
  var [code, setcode] = useState();

  const voltar = () => {
    navigation.navigate('Sala9');
  }
  const entrar = () => {
    if(num1 == 4 && num2 == 2 && num3 == 9 && num4 == 9){
      setresult("Correto")
      setcode("4º digito: 5")
      
    }else{
      setresult("Senha errada!")
      setcode("")
    }
  }


  
  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <View style={styles.main}>

        <Text style={styles.titulo}>
          ohlepsE
        </Text>

        <View style={styles.grid}>


          <Text style={[styles.numb, {borderBottomWidth:3, height:50, width:'22%'}]}>
            <Insert style={{color:'white', width:'90%'}} variavel={setnum1}/>
          </Text>
          <Text style={[styles.numb, {borderBottomWidth:3, height:50, width:'22%'}]}>
            <Insert style={{color:'white', width:'90%'}} variavel={setnum2}/>
          </Text>
          <Text style={[styles.numb, {borderBottomWidth:3, height:50, width:'22%'}]}>
            <Insert style={{color:'white', width:'90%'}} variavel={setnum3}/>
          </Text>
          <Text style={[styles.numb, {borderBottomWidth:3, height:50, width:'22%'}]}>
            <Insert style={{color:'white', width:'90%'}} variavel={setnum4}/>
          </Text>
          <Text style={[styles.numb, {width:'25%'}]}> 1 </Text>
          <Text style={[styles.numb, {width:'25%'}]}> 0 </Text>
          <Text style={[styles.numb, {width:'25%'}]}> 2 </Text>
          <Text style={[styles.numb, {width:'25%'}]}> 7 </Text>

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

export default PuzzleRorrim;