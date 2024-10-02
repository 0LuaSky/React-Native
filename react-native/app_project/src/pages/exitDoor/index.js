import {View, Text} from 'react-native';
import {styles } from './style.js';
import {useState} from 'react';
import Botao from '../../components/butom/index';
import Crement from '../../components/crement/index';
import { useNavigation } from '@react-navigation/native';

const PortaSaida = () => {
  const navigation = useNavigation();

  var [num1, setnum1] = useState(0)
  var [num2, setnum2] = useState(0)
  var [num3, setnum3] = useState(0)
  var [num4, setnum4] = useState(0)
  var [resp, setresp] = useState('')

  const voltar = () => {
    navigation.navigate('Sala5');
  }
  const entrar = () => {
    if(num1 == 0 && num2 == 1 && num3 == 3 && num4 ==5){
      setresp("Abrido")
      navigation.navigate('Saida');
    }else{
      setresp("Erro! Codigo invalido")
    }
  }

  function sum1(){
    if(num1>=9){
      setnum1(0)
    }else{
      setnum1(num1+1)
    }
  }
  function min1(){
    if(num1<=0){
      setnum1(9)
    }else{
      setnum1(num1-1)
    }    
  }

  function sum2(){
    if(num2>=9){
      setnum2(0)
    }else{
      setnum2(num2+1)
    }
  }
  function min2(){
    if(num2<=0){
      setnum2(9)
    }else{
      setnum2(num2-1)
    }    
  }

  function sum3(){
    if(num3>=9){
      setnum3(0)
    }else{
      setnum3(num3+1)
    }
  }
  function min3(){
    if(num3<=0){
      setnum3(9)
    }else{
      setnum3(num3-1)
    }    
  }

  function sum4(){
    if(num4>=9){
      setnum4(0)
    }else{
      setnum4(num4+1)
    }
  }
  function min4(){
    if(num4<=0){
      setnum4(9)
    }else{
      setnum4(num4-1)
    }    
  }
  
  return(
    <View style={{flex: 1 , backgroundColor: 'black'}}>
      <View style={styles.main}>

        <Text style={styles.titulo}>
          Descubra a senha
        </Text>

        <View style={styles.grid}>
          <View grid1 style={styles.content}>
            <Crement funcao={sum1} conteudo='/\'/>
          </View>
          <View grid1 style={styles.content}>
            <Crement funcao={sum2} conteudo='/\'/>
          </View>
          <View grid1 style={styles.content}>
            <Crement funcao={sum3} conteudo='/\'/>
          </View>
          <View grid1 style={styles.content}>
            <Crement funcao={sum4} conteudo='/\'/>
          </View>

          <View grid1 style={styles.content}>
            <Text style={styles.numb}> {num1} </Text>
          </View>
          <View grid1 style={styles.content}>
            <Text style={styles.numb}> {num2} </Text>
          </View>
          <View grid1 style={styles.content}>
            <Text style={styles.numb}> {num3} </Text>
          </View>
          <View grid1 style={styles.content}>
            <Text style={styles.numb}> {num4} </Text>
          </View>


          <View grid1 style={styles.content}>
            <Crement funcao={min1} conteudo='\/'/>
          </View>
          <View grid1 style={styles.content}>
            <Crement funcao={min2} conteudo='\/'/>
          </View>
          <View grid1 style={styles.content}>
            <Crement funcao={min3} conteudo='\/'/>
          </View>
          <View grid1 style={styles.content}>
            <Crement funcao={min4} conteudo='\/'/>
          </View>
        </View>
      
        <Text style={styles.resp}> {resp} </Text>

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

export default PortaSaida;