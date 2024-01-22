import {View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {carouselItems} from '../../data';
import HeaderLeft from '../../component/HeaderLeft';
import IpInfoContainer from '../../component/IpInfoContainer';
import ImageCard from '../../component/ImageCard/Index';
import {CarouselItemProps} from '../../types/general';
import styles from './style';

const Profile = ({route}: {route: any}) => {
  const navigation = useNavigation();
  const isDefault = route?.params && route.params?.title ? false : true;
  const data: CarouselItemProps = isDefault ? carouselItems[0] : route?.params;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft onPress={() => navigation.goBack()} />,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageCard title={data.title} imageUrl={data.illustration} />
      </View>
      <IpInfoContainer />
    </ScrollView>
  );
};

export default Profile;
