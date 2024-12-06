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

});


export {styles}