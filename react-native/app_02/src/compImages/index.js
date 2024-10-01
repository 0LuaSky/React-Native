import { View, Image } from 'react-native'
import {styles} from './style'


function Componente01(){
let foto = 'https://static.wikia.nocookie.net/cuphead/images/2/2a/Hilda_Berg_Moon_Sprite.png/revision/latest/scale-to-width/360?cb=20180404195222';
  return(
    <View style={styles.area}>
      <Image source={{uri:foto}} style={{width: 250,height: 270}}/>
    </View>
  )
}


export default Componente01;