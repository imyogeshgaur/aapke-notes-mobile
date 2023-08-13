import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddTask = () => {
  const navigator: any = useNavigation();
  const onIconPress = () => navigator.navigate('AddTask');

  return <Icon name={'plus'} size={38} onPress={onIconPress} style={{marginRight:10}} color={"white"}/>;
};

export default AddTask;
