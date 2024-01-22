import {TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';
import styles from './style';

const HeaderLeft = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name={'arrow-left'}
        size={24}
        color={colors.default}
      />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
