import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';

const ImageCard = ({
  handlePress,
  title,
  imageUrl,
  isSelected,
}: {
  handlePress?: () => void;
  title: string;
  imageUrl: string;
  isSelected?: boolean;
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
      <View style={[styles.container, isSelected && styles.isSelected]}>
        <Image src={imageUrl} style={styles.image} />
        <View style={styles.title}>
          <Text lineBreakMode="tail" numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ImageCard;
