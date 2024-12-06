import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  main:{
    flex: 1 ,
    margin: 20,
    marginTop: 40,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 30,
  },

  texto:{
    margin: 'auto',
    textAlign: 'center',
    fontSize: 20,
    color:'white',
  },

    titulo:{

    margin: 'auto',
    textAlign: 'center',
    fontSize: 40,
    color:'white',
  },

  grid:{
    margin: 20,


    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    alignContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  content:{

    margin:5,
    height: 50,
    width: 50,
    fontSize: 30,

  },

  verify:{

    color: 'white',

    height: 50,
    width: 100,
    fontSize: 30,

  },

  numb:{
    color: 'white',
    textAlign: 'center',
    height: 50,
    width: 50,
    fontSize: 30,
    backgroundColor: 'gray',
    borderWidth: 2,
    borderRadius: 2,
    borderColor:'white'
  },

  resp:{
    color: 'white',
    marginTop:60,
    marginBottom:10,
    textAlign: 'center',

    fontSize: 30,
  },

  botao:{
    color: 'white',
    textAlign: 'center',
    height: 50,
    width: 50,
    fontSize: 30,
    backgroundColor: 'gray',
    borderWidth: 2,
    borderRadius: 2,
    borderColor:'white',
  },
});


export {styles}