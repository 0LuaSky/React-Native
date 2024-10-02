import {View, Text, Image} from 'react-native';
import {styles } from './style.js';
import {useState} from 'react'
import Botao from '../../components/botao/index'


function App(){
  let foto = 'https://s2-techtudo.glbimg.com/uN9eyQUGntf4kpBew5jSsxx5AI4=/0x0:620x388/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/X/w/QrO4SBQ56HFn90fVj4sQ/2011-03-16-charada.jpg';

  const [num1, setnum1] = useState('')

  function entrar(){
    setnum1(Math.floor(Math.random() * 11));
  }

  
  return(
    <View style={styles.main}>

      <Text style={styles.titulo} >
        Jogo do N° aleatório
      </Text>

      <Image style={styles.imagens} source={{uri:foto}}/>

      <Text style={styles.texto} >
        pense em um N° de 0 a 10
      </Text>

      <Text style={styles.resposta}> {num1} </Text>
      
      <Botao texto="Verificar" funcao={entrar} />


    </View>
  )
};

export default App;