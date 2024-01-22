import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    minHeight: 100,
    paddingTop: 20,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

export default styles;
