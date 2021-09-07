import React from 'react';
import {Image} from 'react-native';


import saved from '../assets/Icons/saved.png';
import place from '../assets/Icons/place.png';
import bell from '../assets/Icons/bell.png';

import IconSearch from '../assets/Icons/IconSearch.png';

const Icon = {

  saved: props => <IconComp source={saved} {...props} />,
  IconSearch: props => <IconComp source={IconSearch} {...props} />,
  place: props => <IconComp source={place} {...props} />,
  bell: props => <IconComp source={bell} {...props} />,

};

const IconComp = ({source, size, color}) => {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        resizeMode: 'contain',
        tintColor: color,
      }}
    />
  );
};

export default Icon;
