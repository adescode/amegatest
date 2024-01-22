import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: colors.default,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  ipText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    width: '70%',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    width: '80%',
  },
  inputButton: {
    flex: 1,
    backgroundColor: colors.default,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default styles;
