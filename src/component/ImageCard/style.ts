import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 200,
    overflow: 'hidden',
    borderColor: 'transparent',
  },
  isSelected: {
    borderColor: colors.default,
    borderWidth: 3,
  },
});

export default styles;
