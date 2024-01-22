import {create} from 'zustand';
import {IpDataProps} from '../types/general';

interface DefaultState {
  userIpInfo: IpDataProps | null;
  setUserIpInfo: (data: IpDataProps) => void;
}

const useStore = create<DefaultState>()(set => ({
  userIpInfo: null,
  setUserIpInfo: userIpInfo => set({userIpInfo}),
}));

export default useStore;
