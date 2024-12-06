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



  numb:{
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    borderColor:'white',

  },

  resp:{
    color: 'white',
    marginTop:60,
    marginBottom:10,
    textAlign: 'center',

    fontSize: 30,
  },

});


export {styles}