import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ClipsIcon = ({color}) => {
  return (
    <View>
      <Svg width={25} height={24} viewBox="0 0 25 24" fill='none'>
        <Path
          d="M12.5 3C10.72 3 8.97991 3.52784 7.49987 4.51677C6.01983 5.50571 4.86628 6.91131 4.18509 8.55585C3.5039 10.2004 3.32567 12.01 3.67294 13.7558C4.0202 15.5016 4.87737 17.1053 6.13604 18.364C7.39472 19.6226 8.99836 20.4798 10.7442 20.8271C12.49 21.1743 14.2996 20.9961 15.9442 20.3149C17.5887 19.6337 18.9943 18.4802 19.9832 17.0001C20.9722 15.5201 21.5 13.78 21.5 12"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Path
          d="M20.2943 7.5C20.3905 7.66673 20.4814 7.83651 20.5668 8.00907"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

export default ClipsIcon;