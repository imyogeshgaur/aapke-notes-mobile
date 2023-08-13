import {StyleSheet, Text,View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import dropDownData from '../../Data/DropDownData';

const CustomDropdown = (props: any) => {
  return (
    <>
      <View style={styles.dropdown} >
      <Picker
        {...props}
        style={styles.dropdown}
        items={dropDownData}
        selectedValue={props.input.value}
        labelField="label"
        valueField="value"
        onValueChange={props.input.onChange}>
        <Picker.Item label={props.placeholder} value="" style={{color:"grey"}} />
        {dropDownData.map((val: any, index: any) => (
          <Picker.Item key={index} value={val.value} label={val.label} />
        ))}
      </Picker>
      </View>
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
      ) : (
        ''
      )}
    </>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    paddingBottom:30,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 7,
    borderColor: 'rgb(94, 115, 231)',
    width: '100%',
  }
});
