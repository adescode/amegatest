import {View} from 'react-native';
import React, {useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {carouselItems} from '../../data';
import ImageCard from '../ImageCard/Index';
import {CarouselItemProps} from '../../types/general';
import styles from './style';

const SliderContainer = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const _renderItem = ({
    item,
    index,
  }: {
    item: CarouselItemProps;
    index: number;
  }) => {
    const IsCurrentIndex = activeIndex === index;

    const handlePress = () => {
      navigation.navigate('Profile', item);
    };
    return (
      <ImageCard
        title={item.title}
        imageUrl={item.illustration}
        handlePress={handlePress}
        isSelected={IsCurrentIndex}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        ref={ref}
        data={carouselItems}
        sliderWidth={400}
        itemWidth={300}
        renderItem={_renderItem}
        onSnapToItem={(index: number) => setActiveIndex(index)}
      />
    </View>
  );
};

export default SliderContainer;
