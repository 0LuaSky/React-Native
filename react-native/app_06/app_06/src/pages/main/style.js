import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  main:{
    margin: 20,
    marginTop: 50,
  },

  titulo:{
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 40,

  },
  texto:{

    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 30,

  },

  imagens:{
    marginBottom: 20,
    alignSelf: 'center',
    width: 320,
    height: 150,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  
  resposta:{
    alignSelf: 'center',
    width: 150,
    borderBottomWidth:3,
    borderColor:'white',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 30,

  },
});


export {styles}