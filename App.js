import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LongButton from './components/Buttons/longButton.component';
import LogoIcon from './components/icons/logo.icon';
import AppNavigator from './navigation/AppNavigator';

import RegistrationBrandScreen from './screens/RegistrationBrandScreen';
import RegistrationUserScreen from './screens/RegistrationUserScreen';
import LoginScreen from './screens/LoginScreen'

const Stack = createStackNavigator()

function App({ navigation }) {
  const GoLogin = () => {
    console.log('GOLOGIN')
    navigation.navigate('Login')
  }

  const GoRegistrationUser = () => {
    console.log('Create personal account')
    navigation.navigate('RegistrationUser')
  }

  const GoRegistrationBrand = () => {
    console.log('Create brand account')
    navigation.navigate('RegistrationBrand')
  }

  return (
    <View style={styles.container}>
      <LogoIcon />
      <Text style={styles.logoText}>evently</Text>
      <Text style={styles.textBold}>Don’t have an account?</Text>
      <StatusBar style="auto" />
      <LongButton onPress={GoRegistrationUser} title={'Create personal account'} />
      <LongButton onPress={GoRegistrationBrand} title={'Create brand account'} />
      <View style={styles.bottom}>
        <Text style={styles.text}>Already have the account?</Text>
        <TouchableOpacity onPress={GoLogin}>
          <Text style={{ color: '#BB83FF', margin: '5px' }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
};

export default function Navigate()  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={App}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistrationUser"
          component={RegistrationUserScreen}
          options={{ title: 'Registration User' }}
        />
        <Stack.Screen
          name="RegistrationBrand"
          component={RegistrationBrandScreen}
          options={{ title: 'Registration Brand' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  text: {
    color: '#FFFFFF',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: '24px',
    fontWeight: '700',
  },
  textBold: {
    marginTop: '60px',
    marginBottom: '30px',
    color: '#FFFFFF',
    fontSize: '20px',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});
