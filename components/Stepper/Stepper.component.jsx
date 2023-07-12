import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StepperStep = ({ number, active, stepCount }) => {
  const line = active ? styles.active_line : styles.inactive_line
  const numb = active ? styles.active : styles.inactive
  const txt = active ? { color: '#000' } : { color: '#FFF' }
  const secondLine = number > stepCount ? styles.active : styles.inactive_line

  if (number === 1) {
    return (
      <View style={styles.step}>
        <View style={numb}>
          <Text style={txt}>{number}</Text>
        </View>
        <View style={line} />
      </View>
    );
  } if (number === stepCount) {
    return (
      <View style={styles.step}>
        <View style={line} />
        <View style={numb}>
          <Text style={txt}>{number}</Text>
        </View>
      </View>
    );
  }
  else {
    return (
      <View style={styles.step}>
        <View style={line} />
        <View style={numb}>
          <Text style={txt}>{number}</Text>
        </View>
        <View style={line} />
      </View>

    )
  }
};

// {stepCount != number ? <> <View style={line} /> <View style={secondLine} /> </> : null}

const Stepper = ({ stepCount, currentStep }) => {
  return (
    <View style={styles.container}>
      {[...Array(stepCount)].map((_, index) => (
        <StepperStep
          key={index}
          number={index + 1}
          active={index <= currentStep}
          stepCount={stepCount}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  step: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  inactive_line: {
    width: '10px',
    height: '4px',
    backgroundColor: '#242424',
  },
  active_line: {
    width: '10px',
    height: '4px',
    backgroundColor: '#E3F563',
  },
  inactive: {
    backgroundColor: '#242424',
    width: '30px',
    height: '30px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '50%',
  },
  active: {
    backgroundColor: '#E3F563',
    width: '30px',
    height: '30px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '50%',
  }
});

export default Stepper;