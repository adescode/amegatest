import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 4,
  },
  isOddContainer: {
    backgroundColor: colors.default,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  isOddText: {
    color: 'white',
  },
});

export default styles;
