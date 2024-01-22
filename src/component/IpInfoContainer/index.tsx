import {View} from 'react-native';
import React from 'react';
import useStore from '../../store';
import {getIpDefaultData} from '../../helper';
import IpInfoContent from '../IpInfoContent';
import styles from './style';

const IpInfoContainer = () => {
  const userIpInfo = useStore(state => state.userIpInfo);
  const defaultIpData = getIpDefaultData(userIpInfo);

  return (
    <View style={styles.container}>
      <IpInfoContent
        title="IP Address"
        description={defaultIpData?.ip || '-'}
      />
      <IpInfoContent
        title="Location"
        description={defaultIpData?.location || '-'}
      />
      <IpInfoContent
        title="TimeZone"
        description={defaultIpData?.timezone || '-'}
      />
      <IpInfoContent title="ISP" description={defaultIpData?.isp || '-'} />
    </View>
  );
};

export default IpInfoContainer;
