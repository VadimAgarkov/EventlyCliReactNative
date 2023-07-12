import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';


export default function RegistrationBrandScreen() {
  const GoLogin = () => {
    console.log('GOLOGIN')
  }
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Registration Brand</Text> 
      </View>
      
     
    
  );
};

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
});