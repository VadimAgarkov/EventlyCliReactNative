import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LongButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E3F563',
    borderRadius: '10px',
    height: '48px',
    width: '100%',
    alignText: 'center',
    margin: '20px'
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    margin: 'auto'
  },
});

export default LongButton;