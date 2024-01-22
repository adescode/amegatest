import axios from 'axios';
// import {saveState} from './localStorage';
import useStore from '../store';

const BASE_IP_URL = 'https://ipwho.is';

export const setDefaultIp = async (ip: string = '') => {
  try {
    const ipDetails = await axios.get(`${BASE_IP_URL}/${ip}`);
    if (ipDetails.data) {
      useStore.getState().setUserIpInfo(ipDetails.data);
      return ipDetails.status;
    }
  } catch (error) {
    console.log('ipDetails.... error', error);
  }
};
