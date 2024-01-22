import {ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {setDefaultIp} from '../../services/httpServices';
import IpInfoContainer from '../../component/IpInfoContainer';
import SearchIpContainer from '../../component/SearchIpContainer';
import SliderContainer from '../../component/SliderContainer';

const Dashboard = () => {
  useEffect(() => {
    setDefaultIp();
  }, []);

  return (
    <ScrollView>
      <SearchIpContainer />
      <IpInfoContainer />
      <SliderContainer />
    </ScrollView>
  );
};

export default Dashboard;
