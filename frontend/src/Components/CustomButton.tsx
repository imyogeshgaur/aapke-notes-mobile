import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const CustomButton = (props: any) => {
  const data = useSelector((state: any) => state.form);

  const loginUser = () => {
    console.log(data.loginForm.values.email);
    console.log(data.loginForm.values.password);
  };

  const registerUser = () => {
    console.log(data.registerForm.values.userName);
    console.log(data.registerForm.values.email);
    console.log(data.registerForm.values.password);
  };
  return (
    <TouchableOpacity
      style={props.btnStyle}
      onPress={props.btnText == 'Register' ? registerUser : loginUser}>
      <Text style={props.btnTextStyle}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
