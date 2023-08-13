import {View, StyleSheet} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import React from 'react';
import propsArray from '../../Data/SignUpData';
import CustomButton from '../../Components/Auth/CustomButton';
import CustomLink from '../../Components/Auth/CustomLink';

let SignUpScreen: any = () => {
  return (
    <View style={styles.container}>
      {propsArray.map((val: any, index: any) => (
        <Field
          key={index}
          name={val.name}
          placeholder={val.placeholder}
          type={val.type}
          component={val.component}
          keyboardType={val.keyboardType}
          secureTextEntry={val.secureTextEntry}
          validate={val.validate}
        />
      ))}
      <CustomButton
        btnText={'Register'}
        btnStyle={styles.btnStyle}
        btnTextStyle={styles.btnTextStyle}
      />
      <CustomLink
        linkViewStyle={styles.linkViewStyle}
        styleOfText={styles.styleOfText}
        styleOfLink={styles.styleOfLink}
        textBeforeLink={'Already Registered ?'}
        textOfLink={'Login Here'}
        redirectTo={'Login'}
      />
    </View>
  );
};

const createSignUpForm = reduxForm({
  form: 'registerForm',
});

SignUpScreen = createSignUpForm(SignUpScreen);

export default SignUpScreen;

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
