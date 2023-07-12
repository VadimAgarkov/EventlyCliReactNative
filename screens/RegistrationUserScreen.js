import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Stepper from '../components/Stepper/Stepper.component';
import LongButton from '../components/Buttons/longButton.component';
import EyesSVG from '../components/icons/GifComponent/eyes.svg';


export default function RegistrationUserScreen() {
  const stepCount = 7;
  const [currentStep, setCurrentStep] = React.useState(0);

  const increment = () => {
    if (currentStep < stepCount - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const decrement = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <View style={styles.container}>
         <EyesSVG/>
      <Stepper stepCount={stepCount} currentStep={currentStep} />
      <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}> 
      </View>
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