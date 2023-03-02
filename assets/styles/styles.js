import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });

const textInput = StyleSheet.create({
    inputs:{
        color:'#F5C62C', 
        textAling:'center', 
        border:'2px',
        borderRadius:10,
        borderWidth:2,
        padding:10,
        borderColor:'#A88100',
        marginTop:10
      }
})

export default {styles,textInput}