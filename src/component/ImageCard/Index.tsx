import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
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
        <Image src={imageUrl} style={{height: 200, width: 300}} />
        <View
          style={{
            position: 'absolute',
            backgroundColor: colors.lightWhite,
            bottom: 0,
            left: 0,
            right: 0,
            padding: 4,
          }}>
          <Text lineBreakMode="tail" numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ImageCard;
