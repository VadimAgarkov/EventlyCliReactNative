import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ServicesIcon = ({color}) => {
  return (
    <View>
      <Svg width={25} height={24} viewBox="0 0 25 24" fill='none'>
        <Path
          d="M3.89996 6C3.89996 4.34315 5.24311 3 6.89996 3H7.89996C9.55682 3 10.9 4.34315 10.9 6V7C10.9 8.65685 9.55682 10 7.89996 10H6.89996C5.24311 10 3.89996 8.65685 3.89996 7V6Z"
          stroke={color}
          strokeWidth={2}
        />
        <Path
          d="M14.9 6C14.9 4.34315 16.2431 3 17.9 3H18.9C20.5568 3 21.9 4.34315 21.9 6V7C21.9 8.65685 20.5568 10 18.9 10H17.9C16.2431 10 14.9 8.65685 14.9 7V6Z"
          stroke={color}
          strokeWidth={2}
        />
        <Path
          d="M14.9 17C14.9 15.3431 16.2431 14 17.9 14H18.9C20.5568 14 21.9 15.3431 21.9 17V18C21.9 19.6569 20.5568 21 18.9 21H17.9C16.2431 21 14.9 19.6569 14.9 18V17Z"
          stroke={color}
          strokeWidth={2}
        />
        <Path
          d="M3.89996 17C3.89996 15.3431 5.24311 14 6.89996 14H7.89996C9.55682 14 10.9 15.3431 10.9 17V18C10.9 19.6569 9.55682 21 7.89996 21H6.89996C5.24311 21 3.89996 19.6569 3.89996 18V17Z"
          stroke={color}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};

export default ServicesIcon;