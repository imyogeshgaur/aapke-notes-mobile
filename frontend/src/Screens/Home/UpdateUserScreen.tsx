import {View, Text,StyleSheet} from 'react-native';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import CustomButton from '../../Components/Auth/CustomButton';
import propsArray from '../../Data/UpdateUserData';


let UpdateUserScreen:any = () => {
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
        btnText={'Update Details'}
        btnStyle={styles.btnStyle}
        btnTextStyle={styles.btnTextStyle}
      />
    </View>
  );
};

const createUserUpdateForm = reduxForm({
  form:"userUpdateForm"
})

UpdateUserScreen = createUserUpdateForm(UpdateUserScreen);

export default UpdateUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  btnStyle: {
    padding: 15,
    width: '50%',
    backgroundColor: 'rgb(93, 74, 217)',
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
});

