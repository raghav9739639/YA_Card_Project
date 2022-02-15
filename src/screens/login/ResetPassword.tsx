import React from 'react';
import { Text, View } from 'react-native';
import ButtonComponent from '../../reusableComponents/ButtonComponent';
import InputFieldComponent from '../../reusableComponents/InputField';

export default function ResetPassword() {
  return (
  <View>
     <InputFieldComponent 
      placeholder = "enter your firstname"
    
     />
     <InputFieldComponent placeholder="enter your lastname" />
     <ButtonComponent 
     
     title = "Submit" />
  </View>
  )
}
