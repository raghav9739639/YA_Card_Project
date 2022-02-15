import React from 'react'
import { Button } from 'react-native'

function CardsComponent(props:any) {
  return (
    <>
     <Button title= {props.title} 
     onPress = {props.Submit}
    
     
     /> 

        
    </>
  )
}

export default CardsComponent;