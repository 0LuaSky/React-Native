import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topInfo: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'flex-end',
  },
  titulo: {
    fontSize: 30,
    color: '#FFF',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 15,
    width: '80%',
    marginBottom: 15,
  },
  botaoContainer: {
    backgroundColor: '#6200ea',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  botao: {
    color: '#FFF',
    fontSize: 18,
  },
  hintCard: {
    width: '90%',
    borderRadius: 5,
    padding: 15,
    marginVertical: 5,
  },
  hintText: {
    color: '#000',
    textAlign: 'center',
  },
  victoryText: {
    color: 'green',
    fontSize: 24,
    marginTop: 20,
  },
  score: {
    fontSize: 20,
    color: 'white',
    marginVertical: 15,
  },
  texto:{
    textShadowColor: '#000',
    textShadowOffset: { width: -4, height: -4 },
    textShadowRadius: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 4, height: 4 },

    fontSize: 15,
    fontWeight: 'bold',
    
    textAlign: 'center',

    color:'white',
  },
});


export {styles}