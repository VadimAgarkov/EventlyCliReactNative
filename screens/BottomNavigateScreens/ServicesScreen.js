import { StyleSheet, Text, View } from 'react-native';

export default function ServicesScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Services</Text>
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
    borderWidth: 0
  },
  text: {
    color: '#FFFFFF',
  },
});