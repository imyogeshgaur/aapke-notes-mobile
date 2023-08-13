import {ToastAndroid, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {AES, enc} from 'react-native-crypto-js';
import axios from 'axios';
import {MY_SECRET_KEY} from '../../env/environment';
import {useNavigation} from '@react-navigation/native';
import {CREATE_A_TASK} from '../../Constants/CONSTANTS';

const CustomButton = (props: any) => {
  const reduxData: any = useSelector((state: any) => state.form);
  const navigator: any = useNavigation();

  const addTaskAPI = async() => {
    try {
      const dataToSend: any = {
        title: reduxData.addTaskForm.values.title,
        description: reduxData.addTaskForm.values.description,
        priority: reduxData.addTaskForm.values.priority,
      };

      const encryptedData = AES.encrypt(
        JSON.stringify(dataToSend),
        MY_SECRET_KEY,
      ).toString();

      const response = await axios.post(CREATE_A_TASK, {encryptedData});
      const responseData = await response.data;
      const decryptedResponseMessage: any = AES.decrypt(
        responseData?.responseString,
        MY_SECRET_KEY,
      ).toString(enc.Utf8);
      const responseMessage = JSON.parse(decryptedResponseMessage);
      console.log(responseMessage)
      
    } catch (error) {
      console.log('Task Registration Error : ' + error);
    }
  };

  const deleteTaskAPI = ()=>{

  }
  return (
    <TouchableOpacity
      style={props.btnStyle}
      onPress={props.btnText == 'Add Task' ? addTaskAPI : deleteTaskAPI}
    >
      <Text style={props.btnTextStyle}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
