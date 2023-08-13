import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = () => {
  const navigator: any = useNavigation();
  const onIconPress = ()=>{
    AsyncStorage.removeItem("token");
    navigator.navigate('Login');
  }

  return <Icon name={"logout"} size={30} onPress={onIconPress} style={{marginTop:4,marginRight:-10,marginLeft:10}} color={"white"}/>
}

export default Logout