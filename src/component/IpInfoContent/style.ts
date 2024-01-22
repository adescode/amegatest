import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
    maxWidth: '25%',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    color: colors.lightWhite,
    fontSize: 10,
  },
});

export default styles;
