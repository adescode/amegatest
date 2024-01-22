export type IpDataProps = {
  borders: string;
  calling_code: string;
  capital: string;
  city: string;
  connection: {
    asn: number;
    domain: string;
    isp: string;
    org: string;
  };
  continent: string;
  continent_code: string;
  country: string;
  country_code: string;
  flag: {
    emoji: string;
    emoji_unicode: string;
    img: string;
  };
  ip: string;
  is_eu: boolean;
  latitude: number;
  longitude: number;
  postal: string;
  region: string;
  region_code: string;
  success: true;
  timezone: {
    abbr: string;
    current_time: string;
    id: string;
    is_dst: false;
    offset: number;
    utc: string;
  };
  type: string;
};

export type IpInfoProps = {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
};