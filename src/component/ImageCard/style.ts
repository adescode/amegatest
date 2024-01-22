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
  image: {height: 200, width: 300},
  title: {
    position: 'absolute',
    backgroundColor: colors.lightWhite,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 4,
  },
});

export default styles;
