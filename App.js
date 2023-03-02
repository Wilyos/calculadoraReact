import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './components/Banner';

export default function App() {
  return (
    <View style={[styles.container,{flex:1,backgroundColor:'#0F24A8'}]}>
      <View style={[styles.container,{flex:1,backgroundColor:'#2C47F5'}]}>
        <Banner name="calculadora"> </Banner>
      </View>
      <View style={[styles.container,{flex:4,backgroundColor:'#4760FF'}]}>
        <Text> cuerpo</Text>
      </View>
      <View style={[styles.container,{flex:1,backgroundColor:'#0F24A8'}]}>
        <Banner name="calculadora1"></Banner>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
