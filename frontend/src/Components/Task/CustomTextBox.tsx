import {TextInput, StyleSheet, Text} from 'react-native';
import React from 'react';

const CustomTextBox = (props: any) => {
  return (
    <>
      <TextInput
        {...props}
        value={props.input.value}
        onChangeText={props.input.onChange}
        style={styles.textBoxStyle}
      />
    </>
  );
};

export default CustomTextBox;

const styles = StyleSheet.create({
  textBoxStyle: {
    width: '100%',
    height: 80,
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
