
import {Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';
import Banner from './components/Banner';
import {style,textInput} from './assets/styles/styles'
import { useState } from 'react';

export default function App() {
  // Definir las variables de estado de este componente
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')
  const [resultado, setResultado] = useState(0)

  //metodo limpiar
  let limpiar = function(){
   /*setValor1=('')
    setValor2=('')
    setResultado=(0)*/
  }
  //definir metodo del componente
  let calcular = (operador) =>{
    if(valor1 !="" && valor2 !=""){
      let resulta = 0;
      switch(operador){
        case "+":
          resulta = parseFloat(valor1) + parseFloat(valor2)
          break
        case "-":
          resulta = parseFloat(valor1) - parseFloat(valor2)
          break
        case "*":
        resulta = parseFloat(valor1) * parseFloat(valor2)
        break
        case "/":
          resulta = parseFloat(valor1) / parseFloat(valor2)
          break
        case"^":
          resulta = parseFloat(valor1)**parseFloat(valor2)
          break
        case"r":
          resulta = Math.sqrt(valor1)
          break
      }
    setResultado(resulta)
    }
    else{
      alert("Debe ingresar los dos valores")
    }
  }

  return (
    <View style={[style.container,{flex:1,backgroundColor:'#0F24A8'}]}>
      <View style={[style.container,{flex:1,backgroundColor:'#2C47F5'}]}>
        <Banner name="calculadora"> </Banner>
      </View>
      <View style={[style.container,{flex:4,backgroundColor:'#4760FF'}]}>
        <Text style={{color:'#F5C62C', fontWeight:'bold'}}>CALCULADORA BASICA</Text>
        <TextInput placeholder='Ingrese un valor1' style={textInput.inputs} onChangeText={valor1=>setValor1(valor1)} />
        <TextInput placeholder='Ingrese un valor2' style={textInput.inputs} onChangeText={valor2=>setValor2(valor2)} />
        <Text style={style.TextTouch}>{resultado.toFixed(2)}</Text>
        <TextInput  style={textInput.inputs}/>
      </View>
      <View style={{flexDirection:'row',marginTop:20,alignItems:'center',marginBottom:20,padding:10}}>
        <TouchableOpacity style={[style.Touchables,{backgroundColor:'green'}]}
        onPress={()=>calcular("*")}>
            <Text style={[style.TextTouch]}>*</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={[style.Touchables,{backgroundColor:'black'}]}
        onPress={()=>calcular("/")}>
            <Text style={[style.TextTouch]}>/</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={[style.Touchables,{backgroundColor:'red'}]}
        onPress={()=>calcular("+")}>
            <Text style={[style.TextTouch]}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.Touchables,{backgroundColor:'orange'}]}
        onPress={()=>calcular("-")}>
            <Text style={[style.TextTouch]}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.Touchables,{backgroundColor:'purple'}]}
        onPress={()=>calcular("^")}>
            <Text style={[style.TextTouch]}>^</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.Touchables,{backgroundColor:'yellow'}]}
        onPress={()=>calcular("r")}>
            <Text style={[style.TextTouch]}>R</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={[style.Touchables,{backgroundColor:'gray'}]}
        onPress={limpiar()}>
            <Text style={[style.TextTouch]}>C</Text>
        </TouchableOpacity>
      </View>
      <View style={[style.container,{flex:1,backgroundColor:'#0F24A8'}]}>
        <Banner name="calculadora1"></Banner>
      </View>
    </View>
  );
}