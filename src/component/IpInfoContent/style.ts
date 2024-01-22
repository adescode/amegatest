import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    gap: 10,
    width: '22%',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    color: colors.lightWhite,
    fontSize: 12,
  },
});

export default styles;
