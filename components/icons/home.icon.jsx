import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({color}) => {
  return (
    <View>
      <Svg width={25} height={24} viewBox="0 0 25 24" fill='none'>
        <Path
          d="M3.29999 10.8079C3.29999 9.90983 3.70229 9.05902 4.39638 8.48919L9.76185 4.08421C11.2372 2.87297 13.3628 2.87297 14.8381 4.08421L20.2036 8.48919C20.8977 9.05902 21.3 9.90983 21.3 10.8079V18.0004C21.3 19.6573 19.9568 21.0004 18.3 21.0004H6.29999C4.64313 21.0004 3.29999 19.6573 3.29999 18.0004V10.8079Z"
          stroke={color}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};

export default HomeIcon;