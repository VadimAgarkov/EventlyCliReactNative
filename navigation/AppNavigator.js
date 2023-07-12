import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';


import ChatsScreen from "../screens/BottomNavigateScreens/ChatsScreen";
import ClipsScreen from "../screens/BottomNavigateScreens/ClipsScreen";
import HomeScreen from "../screens/BottomNavigateScreens/HomeScreen";
import ProfileScreen from "../screens/BottomNavigateScreens/ProfileScreen";
import ServicesScreen from "../screens/BottomNavigateScreens/ServicesScreen";
import ChatsIcon from "../components/icons/chats.icon";
import ClipsIcon from "../components/icons/clips.icon";
import HomeIcon from "../components/icons/home.icon";
import ProfileIcon from "../components/icons/profile.icon";
import ServicesIcon from "../components/icons/services.icon";
import { View, StyleSheet } from 'react-native';
import { Screen } from '@react-navigation/elements';


const Tab = createBottomTabNavigator();

export default function AppNavigator() {

  const Icon = (icon) => {
    return icon
  }
  return (
    <NavigationContainer style={{backgroundColor : '#FFFFFF'}}>
        <Tab.Navigator
          tabBarOptions={{
            activeBackgroundColor: '#E3F563',
            activeTintColor: '#000000',
            inactiveTintColor: '#FFFFFF',
            activeColor: 'white',
            tabStyle: {
               borderRadius: '10px'
           },
          }}
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#FFFFFF',
            tabBarStyle : {
              backgroundColor: '#000000',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            } 
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: Icon(HomeIcon),
              headerStyle: {
                backgroundColor:'#333333',
                tintColor: 'white',
              }
            }}
          />
          <Tab.Screen
            name="Services"
            component={ServicesScreen}
            options={{
              tabBarIcon: Icon(ServicesIcon),
              headerStyle: {
                backgroundColor:'#333333',
                tintColor: 'white'
              }
            }}
          />
          <Tab.Screen
            name="Clips"
            component={ClipsScreen}
            options={{
              tabBarIcon: Icon(ClipsIcon),
              headerStyle: {
                backgroundColor:'#333333',
                tintColor: 'white'
              }
            }}
          />
          <Tab.Screen
            name="Chats"
            component={ChatsScreen}
            options={{
              tabBarIcon: Icon(ChatsIcon),
              headerStyle: {
                backgroundColor:'#333333',
                tintColor: 'white'
              }
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: Icon(ProfileIcon),
              headerStyle: {
                backgroundColor:'#333333',
                tintColor: 'white'
              }
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
};
