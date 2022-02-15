import React from 'react'
import { TextInput,StyleSheet } from 'react-native';



function InputFieldComponent(props:any) {
  return (
            <>
            <TextInput style={styles.red}
        
          placeholder={props.placeholder}
         onPressIn = {props.onPressIn}
        
            
            />

            {/* <TextInput placeholder={props.placeholder}></TextInput> */}
            </>
    )
}

const styles=StyleSheet.create({
  red:{
    fontSize:30,
    color:'red',
    backgroundColor:'white'
  }
})

export default InputFieldComponent;
