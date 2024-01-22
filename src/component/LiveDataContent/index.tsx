import React from 'react';
import {Text, View} from 'react-native';
import {LiveDataProps} from '../../types/general';
import styles from './style';

const LiveDataContent = ({
  itemData,
  isOdd,
}: {
  itemData: LiveDataProps;
  isOdd: boolean;
}) => {
  return (
    <View style={[styles.container, isOdd && styles.isOddContainer]}>
      <Text style={[styles.text, isOdd && styles.isOddText]}>
        {itemData?.s}
      </Text>
      <Text style={[styles.text, isOdd && styles.isOddText]}>|</Text>
      <Text style={[styles.text, isOdd && styles.isOddText]}>
        {itemData?.a}
      </Text>
      <Text style={[styles.text, isOdd && styles.isOddText]}>|</Text>
      <Text style={[styles.text, isOdd && styles.isOddText]}>
        {itemData?.T}
      </Text>
    </View>
  );
};

export default LiveDataContent;
