import {View, Text, Image} from 'react-native';
import {styles } from './style.js';
import {useState} from 'react'
import Botao from '../../components/botao/index'
import Texto from '../../components/texto/index'

function App(){
  let foto = 'https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2020/06/3semana8-e1593558030198.jpg';

  const [input1, setInput1] = useState('soc')
  const [input2, setInput2] = useState('orro')
  const [res, setRes] = useState('')
  const [answer, setAnswer] = useState('')

  function entrar(){
    if ( !isNaN(input1) && !isNaN(input2) ){
      setRes(input1 / input2)
      if(res < 0.7){
        setAnswer('Alcool é a melhor opção');
      }else{
        setAnswer('gasolina é a melhor opção');
      }

    }else{
      setRes('Erro, insira um numero valido')
    }
  }

  
  return(
    <View style={styles.main}>

      <Image style={styles.imagens} source={{uri:foto}}/>

      <Texto texto="Insira o preço do alcool" variavel={setInput1}/>

      <Texto texto="Insira o preço da gasolina" variavel={setInput2}/>

      <Botao texto="Verificar" funcao={entrar} />

      <Text style={styles.resposta}> {answer} </Text>

    </View>
  )
};

export default App;