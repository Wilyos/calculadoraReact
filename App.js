import {Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import Banner from './components/Banner';
import {style,textInput} from './assets/styles/styles'

export default function App() {
  return (
    <View style={[style.container,{flex:1,backgroundColor:'#0F24A8'}]}>
      <View style={[style.container,{flex:1,backgroundColor:'#2C47F5'}]}>
        <Banner name="calculadora"> </Banner>
      </View>
      <View style={[style.container,{flex:4,backgroundColor:'#4760FF'}]}>
        <Text style={{color:'#F5C62C', fontWeight:'bold'}}>CALCULADORA BASICA</Text>
        <TextInput placeholder='Ingrese un valor' style={textInput.inputs}/>
        <TextInput placeholder='Ingrese un valor' style={textInput.inputs}/>
        <TextInput placeholder='Ingrese un valor' style={textInput.inputs}/>
      </View>
      <View style={[style.container,{flex:1,backgroundColor:'#0F24A8'}]}>
        <Banner name="calculadora1"></Banner>
      </View>
    </View>
  );
}