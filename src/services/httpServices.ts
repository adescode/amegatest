import axios from 'axios';
// import {saveState} from './localStorage';
import useStore from '../store';

const BASE_IP_URL = 'https://ipwho.is';
const BASE_SOCKET_URL = 'wss://stream.binance.com:443/ws/bnbusdt';

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

export const forexLiveData = () => {
  try {
    const webSocket = new WebSocket(BASE_SOCKET_URL);
    webSocket.onopen = () => {
      webSocket.send(
        JSON.stringify({
          method: 'SUBSCRIBE',
          params: ['btcusdt@aggTrade'],
          id: 1,
        }),
      );
    };
    webSocket.onmessage = event => {
      // console.log('event', event.data);
      setTimeout(() => {
        useStore.getState().setLiveData(event.data);
      }, 3000);
    };
    return webSocket;
  } catch (error) {
    console.log('forexLiveData.... error', error);
  }
};
