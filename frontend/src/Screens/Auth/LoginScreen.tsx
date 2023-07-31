import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {useSelector} from 'react-redux';
import propsArray from '../../Data/LoginData';
import CustomButton from '../../Components/CustomButton';
import CustomLink from '../../Components/CustomLink';

let LoginScreen: any = () => {
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
const createSignUpForm = reduxForm({
  form: 'loginForm',
});

LoginScreen = createSignUpForm(LoginScreen);

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
