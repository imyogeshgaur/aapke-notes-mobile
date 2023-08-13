import {StyleSheet, View} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import taskData from '../../Data/TaskData';
import CustomButton from '../../Components/Task/CustomButton';

let AddTaskScreen: any = () => {
  return (
      <View style={styles.container}>
        {taskData.map((val: any, index: any) => (
          <Field
            key={index}
            name={val.name}
            type={val.type}
            component={val.component}
            placeholder={val.placeholder}
            validate={val.validate}
          />
        ))}
        <CustomButton 
        btnText={"Add Task"}
        btnStyle={styles.btnStyle}
        btnTextStyle={styles.btnTextStyle}
        />
      </View>
  );
};

const createTaskForm = reduxForm({
  form: 'addTaskForm',
});

AddTaskScreen = createTaskForm(AddTaskScreen);

export default AddTaskScreen;

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
    backgroundColor: 'rgb(126, 78, 237)',
    borderRadius: 10,
  },
  btnTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
});
