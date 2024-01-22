import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {forexLiveData} from '../../services/httpServices';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import useStore from '../../store';
import LiveDataContent from '../../component/LiveDataContent';
import colors from '../../theme/colors';
import styles from './style';

const Market = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const liveData = useStore(state => state.liveData);

  useEffect(() => {
    const websocket = forexLiveData();
    if (!isFocused) {
      websocket?.close();
    }
    return () => websocket?.close();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={liveData}
        renderItem={itemData => {
          const isOdd = itemData.index % 2 == 1;

          const key = itemData.item?.l + itemData.index;
          return (
            <LiveDataContent key={key} itemData={itemData.item} isOdd={isOdd} />
          );
        }}
        keyExtractor={item => item.f}
        ListEmptyComponent={
          <ActivityIndicator size={'large'} color={colors.default} />
        }
      />
    </View>
  );
};

export default Market;
