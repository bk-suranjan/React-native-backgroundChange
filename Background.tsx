import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Background() {
  let [color,setColor] = useState("#000000");
  let colorValue = "#";

  let [trangleColor,setTrangleColor] = useState("#2596be");
  let TrangleColorValue = "#";

  // 
  let handlePress = ()=>{
    let hexaRange = "123456789ABCDEF";

    for(let i = 0; i<6; i++){
      TrangleColorValue+=hexaRange[(Math.floor(Math.random()*16))]
    }

    setColor(TrangleColorValue);
  }

  //onPressTrangleHandle

  let onPressTrangleHandle = () =>{
    let hexaRange = "123456789ABCDEF";
    for(let i = 0; i<6;i++) {
      TrangleColorValue+=hexaRange[Math.floor(Math.random() * 16)];
    }
    setTrangleColor(TrangleColorValue);
  }
  return (
    <View>
      <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Text style={styles.btnTxt}>Click me!!</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.trangle,{backgroundColor:trangleColor}]} onPress={onPressTrangleHandle}>

        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      height:"100%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",



    },
    btn: {
      borderWidth: 2,
      paddingHorizontal: 20,
      paddingVertical: 15,
      width: "30%",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderColor:"yellow",
      elevation: 5,
      shadowColor: "pink",
      shadowOffset: { width: 0, height: 2 },  // iOS shadow offset
      shadowOpacity: 0.25,                    // iOS shadow opacity
      shadowRadius: 3.84,                     // iOS shadow blur radius
  },
  
    btnTxt:{
       
    },
    trangle:{
      height:80,
      width:200,
      borderRadius:10,
      marginVertical:20,
      
    }
})