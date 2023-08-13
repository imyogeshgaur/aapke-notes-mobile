import {View, Text, StyleSheet} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {useSelector} from 'react-redux';
import CustomInput from '../../Components/user/CustomInput';

let UserDetailScreen: any = () => {
  const userDetails = useSelector((state: any) => state.user);
  console.log(userDetails)
  const userDetailArray: Array<any> = [
    {
      defaultValue: userDetails.userName,
      name: 'userName',
      type: 'text',
      component: CustomInput,
      editable: false,
    },
    {
      defaultValue: userDetails.email,
      name: 'email',
      type: 'text',
      component: CustomInput,
      editable: false,
    },
    {
      defaultValue: userDetails.password,
      name: 'password',
      type: 'text',
      component: CustomInput,
      editable: false,
    },
  ];
  return (
    <View style={styles.container}>
      {userDetailArray.map((val: any, index: any) => (
        <Field
          key={index}
          name={val.name}
          type={val.type}
          component={val.component}
          editable={val.editable}
          defaultValue={val.defaultValue}
        />
      ))}
    </View>
  );
};

const createUserDetailForm = reduxForm({
  form: 'userDetailForm',
});

UserDetailScreen = createUserDetailForm(UserDetailScreen);

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
