import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
  email: string().email().required(),
 
});

const FormTry = () => {
  
    function handleSubmit() {
        console.log("btn was clicked")
    }

  return (
    <View>
      
      <Formik
     initialValues={{ email: '',password: " " }}
     onSubmit={values => console.log(values)}
     validationSchema={userSchema}
  
   >
     {({ handleChange, handleBlur, handleSubmit, errors ,values }) => (
       <View>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           style={styles.inputBox}
           placeholder="Email"
         />
         {errors.email && (<Text style={styles.errorMsg}>pls enter vaild email</Text>)}
          <TextInput
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
           style={styles.inputBox}
           placeholder="Password"
         />
         <TouchableOpacity onPress={()=>handleSubmit} style={styles.btn} >
            <Text style={styles.btnText}>Submit</Text>
         </TouchableOpacity>
      
       </View>
     )}
   </Formik>

    </View>
  )
}

export default FormTry

const styles = StyleSheet.create({

  inputBox:{
    height:50,
    width:"90%",
    borderWidth:1,
    borderRadius:10,
    marginHorizontal:10,
    marginVertical:20,
    paddingLeft:20,
    
    
  },
    btn:{
        backgroundColor:"orange",
        padding:10,
        width:"30%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginHorizontal:120,
        marginVertical:0,
        
    },
    btnText:{
      fontSize:18,
      color:"blue",
      
    },
    errorMsg:{
      color:"red",
      paddingHorizontal:20,
    },
})