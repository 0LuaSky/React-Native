import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  main:{
    margin: 20,

    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    alignContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  grid:{
    margin: 'auto',
    marginTop:'auto', marginBottom:'auto',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: '30%',
    height: '30%'
  },

  texto:{
    margin: 'auto',
    textAlign: 'center',
    fontSize: 20,
    color:'white',
  },

    titulo:{
    marginTop: 50,
    margin: 'auto',
    textAlign: 'center',
    fontSize: 40,
    color:'white',
  },
});


export {styles}