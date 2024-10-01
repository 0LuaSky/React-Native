import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  main:{
    margin: 20,
    marginTop: 70,
  },

  texto:{
    shadowOffset: {width: 0,height: 10},
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 30,

  },

  imagens:{
    marginBottom: 30,
    alignSelf: 'center',
    width: 320,
    height: 150,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  
  resposta:{
    color: 'white',
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,

  },
});


export {styles}