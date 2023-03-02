import {View,Text, Image} from 'react-native'


function Banner(props){
    return(
      <Image source={require(`../assets/img/${props.name}.jpg`)} style={{width:'100%',height:'100%', resizeMode:'cover'}}></Image>
    );
  }


export default Banner