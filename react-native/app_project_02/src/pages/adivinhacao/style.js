import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Ocupar a tela inteira
    resizeMode: 'cover', // Ajustar a imagem para cobrir toda a área
    justifyContent: 'center', // Centralizar conteúdo
  },

  overlay: {
    ...StyleSheet.absoluteFillObject, // Preenche toda a tela
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Define a cor e opacidade (0.5)
  },
  
  main:{
    flex: 1 ,
    margin: 20,
    marginTop: 0,
  },
  maingrid:{
    flexDirection: 'row',
    margin: 20,
    marginTop: 0,
  },

  copo:{
    textShadowColor: '#000',
    textShadowOffset: { width: -4, height: -4 },
    textShadowRadius: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 4, height: 4 },

    fontSize: 15,
    fontWeight: 'bold',
    margin: 'auto',
    textAlign: 'center',

    color:'white',
  },

  texto:{
    textShadowColor: '#000',
    textShadowOffset: { width: -4, height: -4 },
    textShadowRadius: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 4, height: 4 },

    fontSize: 15,
    fontWeight: 'bold',
    margin: 'auto',
    textAlign: 'center',

    color:'white',
  },

  titulo:{
    textShadowColor: '#000',
    textShadowOffset: { width: -4, height: -4 },
    textShadowRadius: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 4, height: 4 },

    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
    margin: 'auto',
    textAlign: 'center',
  },

  content:{
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'center',

  },

  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao:{
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }


});


export {styles}