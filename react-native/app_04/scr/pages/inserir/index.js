import {View, Text} from 'react-native';
import {styles } from './style.js';
import {useState} from 'react'
import Botao from '../../components/botao/index'
import Texto from '../../components/texto/index'

function App(){
  const [input1, setInput1] = useState('soc')
  const [input2, setInput2] = useState('orro')
  const [res, setRes] = useState('')


  function entrar(){
    if ( !isNaN(input1) && !isNaN(input2) ){
      setRes(input1 * input2);
    }else{
      setRes('Erro, insira um numero valido')
    }
  }

  
  return(
    <View style={styles.main}>

      <Text style={styles.texto}>
        Multiplicador de numeros
      </Text>

      <Texto texto="Insira o primeiro valor" variavel={setInput1}/>

      <Texto texto="Insira o segundo valor" variavel={setInput2}/>

      <Botao texto="Multiplicar" funcao={entrar} />

      <Text style={styles.resposta}> {res} </Text>

    </View>
  )
};

export default App;
