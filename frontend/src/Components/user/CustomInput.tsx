import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomInput = (props: any) => {
  return (
    <TextInput
      {...props}
      value={props.input.value}
      onChangeText={props.input.onChange}
      style={styles.textInputStyle}
    />
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
    borderColor: 'rgb(68, 25, 148)',
  },
});
