import React from 'react'
import { Button } from 'react-native'

function ButtonComponent(props:any) {
  return (
    <>
     <Button title= {props.title} 
     onPress = {props.Submit}
    
     
     /> 

        
    </>
  )
}

export default ButtonComponent