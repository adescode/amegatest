import useStore from '../store';
import {IpDataProps, LiveDataProps} from '../types/general';

export const getIpDefaultData = (data: IpDataProps | null) => {
  if (data?.ip) {
    return {
      ip: data?.ip || '-',
      location: `${data?.region || '-'}, ${data?.region_code || '-'}`,
      timezone: `UTC ${data?.timezone?.utc || '-'}`,
      isp: data?.connection?.isp || '-',
    };
  } else {
    return {};
  }
};

export const handleLiveData = (newData: string) => {
  console.log('newData', newData);

  const liveData = useStore.getState().liveData as LiveDataProps[];
  if (liveData.length > 500) {
    const newLiveData = liveData.slice(200);
    newLiveData.push(JSON.parse(newData));
    return newLiveData;
  } else {
    liveData.push(JSON.parse(newData));
    return liveData;
  }
};
