import {create} from 'zustand';
import {IpDataProps, LiveDataProps} from '../types/general';
import {handleLiveData} from '../helper';

interface DefaultState {
  userIpInfo: IpDataProps | null;
  setUserIpInfo: (data: IpDataProps) => void;
  liveData: LiveDataProps[];
  setLiveData: (liveData: any) => void;
}

const useStore = create<DefaultState>()(set => ({
  userIpInfo: null,
  setUserIpInfo: userIpInfo => set({userIpInfo}),

  liveData: [],
  setLiveData: liveData => set({liveData: handleLiveData(liveData)}),
}));

export default useStore;
