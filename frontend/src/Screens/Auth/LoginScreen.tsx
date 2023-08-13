import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Field, reduxForm} from 'redux-form';
import propsArray from '../../Data/LoginData';
import CustomButton from '../../Components/Auth/CustomButton';
import CustomLink from '../../Components/Auth/CustomLink';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addUserToStore } from '../../Redux/slice/UserSlice';
import getUserDetailsAPI from '../../api/UserData';

let LoginScreen: any = () => {
  const dispatch = useDispatch();
  const navigator: any = useNavigation();

  // AsyncStorage.getItem('token')
  //   .then(token => {
  //     getUserDetailsAPI(token).then(user=>{
  //       const myUser = user._doc
  //       dispatch(addUserToStore({
  //         userId: myUser._id,
  //         userName: myUser.userName,
  //         role: myUser.role,
  //         email: myUser.email,
  //       }))
  //     })
  //   })
  //   .catch(err => console.log(err));

  AsyncStorage.getItem("token").then(res=>res ? navigator.navigate("Home") :"").catch(err=>console.log(err))

  return (
    <View style={styles.container}>
      {propsArray.map((val: any, index: any) => (
        <Field
          key={index}
          placeholder={val.placeholder}
          name={val.name}
          type={val.type}
          component={val.component}
          keyboardType={val.keyboardType}
          secureTextEntry={val.secureTextEntry}
          validate={val.validate}
        />
      ))}
      <CustomButton
        btnText={'Login'}
        btnStyle={styles.btnStyle}
        btnTextStyle={styles.btnTextStyle}
      />

      <CustomLink
        linkViewStyle={styles.linkViewStyle}
        styleOfText={styles.styleOfText}
        styleOfLink={styles.styleOfLink}
        textBeforeLink={'Newly Joined ?'}
        textOfLink={'Register Here'}
        redirectTo={'Register'}
      />
    </View>
  );
};
const createLoginForm = reduxForm({
  form: 'loginForm',
});

LoginScreen = createLoginForm(LoginScreen);

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  btnStyle: {
    padding: 15,
    width: '30%',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  btnTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  linkViewStyle: {
    marginTop: 10,
    alignItems: 'center',
  },
  styleOfText: {
    color: 'black',
  },
  styleOfLink: {
    color: 'blue',
  },
});
