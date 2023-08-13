import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUpScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import AddTask from '../Components/Icons/AddTask';
import Logout from '../Components/Icons/Logout';
import Profile from '../Components/Icons/Profile';
import UpdateUserScreen from '../Screens/Home/UpdateUserScreen';
import AddTaskScreen from '../Screens/Task/AddTaskScreen';
import UpdateTaskScreen from '../Screens/Task/UpdateTaskScreen';
import { useSelector } from 'react-redux';
import UserDetailScreen from '../Screens/Home/UserDetailScreen';

const AppRoutes = () => {
  const Stack = createNativeStackNavigator();
  const userData = useSelector((state:any)=>state.user)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle:{
              backgroundColor:"rgb(126, 78, 237)"
            },
            headerTintColor:"white",
            headerTitleAlign:"center",
            headerTitle:`Welcome ${userData.userName}`,
            headerLeft:()=><View style={{marginLeft:-10}}><Logout /></View>,
            headerRight:()=><AddTask/>
          }}
        />
        <Stack.Screen
        name="Profile"
        component={UserDetailScreen}
        options={{
          headerStyle:{
            backgroundColor:"rgb(126, 78, 237)"
          },
          headerTintColor:"white",
          headerTitleAlign:"center",
          headerTitle:`${userData.userName} Details`,
          headerRight:()=><View style={{flexDirection:"row"}}><AddTask/><Logout /></View>
        }}
        />
        <Stack.Screen
        name={"Update"}
        component={UpdateUserScreen}
        options={{
          headerStyle:{
            backgroundColor:"rgb(126, 78, 237)"
          },
          headerTintColor:"white",
          headerTitleAlign:"center",
          headerTitle:`Update Detail`,
          headerRight:()=><Logout />
        }}
        />
        <Stack.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{
          headerStyle:{
            backgroundColor:"rgb(126, 78, 237)"
          },
          headerTintColor:"white",
          headerTitleAlign:"center",
          headerTitle:"Add your Task",
          headerRight:()=><View style={{flexDirection:"row"}}><Profile /><Logout /></View>
        }}
        />
        <Stack.Screen 
        name="Task"
        component={UpdateTaskScreen}
        options={{
          headerStyle:{
            backgroundColor:"rgb(126, 78, 237)"
          },
          headerTintColor:"white",
          headerTitleAlign:"center",
          headerTitle:`${userData.userName} Task`,
          headerLeft:()=><Logout />,
          headerRight:()=><View style={{flexDirection:"row"}}><AddTask /><Profile /></View>
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
