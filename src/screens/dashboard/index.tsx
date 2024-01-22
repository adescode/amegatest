import {ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {setDefaultIp} from '../../services/httpServices';
import IpInfoContainer from '../../component/IpInfoContainer';
import SearchIpContainer from '../../component/SearchIpContainer';

const Dashboard = () => {
  useEffect(() => {
    setDefaultIp();
  }, []);

  return (
    <ScrollView>
      <SearchIpContainer />
      <IpInfoContainer />
    </ScrollView>
  );
};

export default Dashboard;
