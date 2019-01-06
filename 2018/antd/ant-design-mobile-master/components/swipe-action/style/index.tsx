import variables from '../../style/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  actions: {
    flexDirection: 'column',
  },
  buttonWrap: {
    borderTopWidth: 1,
    borderTopColor: variables.neutral_5,
    borderStyle: 'solid',
    paddingVertical: 3 * variables.grid,
  },
  button: {
    textAlign: 'center',
    color: variables.blue_6,
  },
});
