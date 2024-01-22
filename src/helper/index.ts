import {IpDataProps} from '../types/general';

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
