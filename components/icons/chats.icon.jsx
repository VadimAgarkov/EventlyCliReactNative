import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ChatsIcon = ({color}) => {
  return (
    <View>
      <Svg width={25} height={24} viewBox="0 0 25 24" fill='none'>
        <Path
          d="M10.1 21H3.96156C3.57765 21 3.33697 20.5853 3.52744 20.2519L4.74527 17.6317C4.82258 17.4653 4.80166 17.2707 4.69719 17.1199C3.69007 15.6665 3.09998 13.9021 3.09998 12C3.09998 7.02944 7.12941 3 12.1 3C17.397 3 21.624 7.76292 21.045 13"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Path
          d="M19.1 18C19.1 19.6569 17.7568 21 16.1 21C14.4431 21 13.1 19.6569 13.1 18C13.1 16.3431 14.4431 15 16.1 15C17.7568 15 19.1 16.3431 19.1 18Z"
          stroke={color}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};

export default ChatsIcon;