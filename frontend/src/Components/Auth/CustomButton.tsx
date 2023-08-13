import {ToastAndroid, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AES, enc} from 'react-native-crypto-js';
import axios from 'axios';
import {MY_SECRET_KEY} from '../../env/environment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {LOGIN_API, SIGN_UP_API} from '../../Constants/CONSTANTS';
import getUserDetailsAPI from '../../api/UserData';
import {addUserToStore} from '../../Redux/slice/UserSlice';

const CustomButton = (props: any) => {
  const reduxData: any = useSelector((state: any) => state.form);
  const navigator: any = useNavigation();
  const dispatch = useDispatch();

  const loginUserAPI = async () => {
    try {
      const dataToSend: any = {
        email: reduxData.loginForm.values.email,
        password: reduxData.loginForm.values.password,
      };

      const encryptedData = AES.encrypt(
        JSON.stringify(dataToSend),
        MY_SECRET_KEY,
      ).toString();

      const response = await axios.post(LOGIN_API, {encryptedData});
      const responseData = await response.data;
      const decryptedResponseMessage: any = AES.decrypt(
        responseData?.responseString,
        MY_SECRET_KEY,
      ).toString(enc.Utf8);
      const responseMessage = JSON.parse(decryptedResponseMessage);

      if (responseMessage.token) {
        AsyncStorage.setItem('token', responseMessage?.token);
        const responseMessageFromUser = await getUserDetailsAPI(
          responseMessage?.token,
        );
        const user = responseMessageFromUser._doc;
        dispatch(
          addUserToStore({
            userId: user._id,
            userName: user.userName,
            role: user.role,
            email: user.email,
          }),
        );
        navigator.navigate('Home');
      } else {
        ToastAndroid.show(responseMessage?.message, 5000);
      }
    } catch (error) {
      console.log('User Login Error : ' + error);
    }
  };

  const registerUserAPI = async () => {
    try {
      const dataToSend: any = {
        userName: reduxData.registerForm.values.userName,
        email: reduxData.registerForm.values.email,
        password: reduxData.registerForm.values.password,
      };

      const encryptedData = AES.encrypt(
        JSON.stringify(dataToSend),
        MY_SECRET_KEY,
      ).toString();

      const response = await axios.post(SIGN_UP_API, {
        encryptedData,
      });
      const responseData = await response.data;
      const decryptedResponseMessage: any = AES.decrypt(
        responseData?.responseString,
        MY_SECRET_KEY,
      ).toString(enc.Utf8);
      const responseMessage = JSON.parse(decryptedResponseMessage);

      if (responseMessage?.message) {
        ToastAndroid.show(responseMessage?.message, 5000);
        navigator.navigate('Login');
      } else {
        ToastAndroid.show(responseMessage?.message, 5000);
      }
    } catch (error) {
      console.log('User Registration Error : ' + error);
    }
  };

  return (
    <TouchableOpacity
      style={props.btnStyle}
      onPress={props.btnText == 'Register' ? registerUserAPI : loginUserAPI}>
      <Text style={props.btnTextStyle}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
