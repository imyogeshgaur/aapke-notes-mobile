import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  const navigator: any = useNavigation();
  const onIconPress = () => navigator.navigate('Profile');
  return (
    <Icon name={'account'} size={40} color={'white'} onPress={onIconPress} />
  );
};

export default Profile;
