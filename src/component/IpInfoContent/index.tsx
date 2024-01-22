import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';

const IpInfoContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} lineBreakMode="tail" style={styles.title}>
        {title}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default IpInfoContent;
