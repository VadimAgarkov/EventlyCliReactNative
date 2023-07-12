import { StyleSheet, Text, View } from 'react-native';

export default function ClipsScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clips</Text>
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