import {TextInput, StyleSheet, Text} from 'react-native';
import React from 'react';

const CustomInput = (props: any) => {
  return (
    <>
      <TextInput
        {...props}
        value={props.input.value}
        onChangeText={props.input.onChange}
        style={styles.textInputStyle}
      />
      {props.meta.error == 'Required Field' ? (
        <Text
          style={{
            color: 'red',
            marginLeft: -280,
            marginBottom: 5,
            marginTop: -7,
          }}>
          {props.meta.error}
        </Text>
      ) : props.meta.error == 'Invalid email address' ? (
        <Text
          style={{
            color: 'red',
            marginLeft: -230,
            marginBottom: 5,
            marginTop: -7,
          }}>
          {props.meta.error}
        </Text>
      ) : props.meta.error == 'Please Input a Strong Password' ? (
        <Text
          style={{
            color: 'red',
            marginLeft: -100,
            marginBottom: 5,
            marginTop: -7,
          }}>
          {props.meta.error}
        </Text>
      ) : (
        ''
      )}
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInputStyle: {
    width: '100%',
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    paddingLeft: 8,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 7,
    borderColor: 'rgb(94, 115, 231)',
  },
});
