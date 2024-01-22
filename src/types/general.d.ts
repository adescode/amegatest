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

export type CarouselItemProps = {
  title: string;
  subtitle: string;
  illustration: string;
};

export type LiveDataProps = {
  e: string;
  E: number;
  s: string;
  a: number;
  p: string;
  q: string;
  f: number;
  l: number;
  T: number;
  m: boolean;
  M: boolean;
};
