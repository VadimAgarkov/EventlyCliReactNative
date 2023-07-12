
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  const GoLogin = () => {
    console.log('GOLOGIN')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
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


