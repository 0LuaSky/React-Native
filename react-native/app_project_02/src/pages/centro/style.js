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
    margin: 20,
    marginTop: 'auto',
    flex: 1,
    flexDirection: 'row'
  },

  centercontent:{
    margin: 20,

    justifyContent: 'center',

    width: 548,
    height: 560

  },

  content:{
    margin: 20,
    justifyContent: 'center',
    width: 334,
    height: 560,

  },

  texto:{
    textShadowColor: '#000',
    textShadowOffset: { width: -4, height: -4 },
    textShadowRadius: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 4, height: 4 },


    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    color:'white',
  },
  
  titulo:{
    textShadowColor: '#000',
    textShadowOffset: { width: -4, height: -4 },
    textShadowRadius: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 4, height: 4 },
    
    marginTop: 50,
    margin: 'auto',
    textAlign: 'center',
    fontSize: 40,
    color:'white',
  },
});


export {styles}