import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (props:any) => {
  return (
    <TouchableOpacity 
    style={props.btnStyle}
    // onPress={props.btnText == 'Register' ? registerUserAPI : loginUserAPI}
    >
    <Text style={props.btnTextStyle}>{props.btnText}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton