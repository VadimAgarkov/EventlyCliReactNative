import React from 'react';
import { View } from 'react-native';
import Svg, { Ellipse, Path } from 'react-native-svg';

const ProfileIcon = ({color}) => {
  return (
    <View>
      <Svg width={25} height={24} viewBox="0 0 25 24" fill='none'>
        <Ellipse
          cx={12.7}
          cy={6.97733}
          rx={3.9773}
          ry={3.97733}
          stroke={color}
          strokeWidth={2}
        />
        <Path
          d="M15.6827 13.9375H9.71679C6.97104 13.9375 4.51158 16.4729 6.31866 18.5402C7.54755 19.946 9.57978 20.8978 12.6998 20.8978C15.8198 20.8978 17.852 19.946 19.0809 18.5402C20.888 16.4729 18.4285 13.9375 15.6827 13.9375Z"
          stroke={color}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};

export default ProfileIcon;