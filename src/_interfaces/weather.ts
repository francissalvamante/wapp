interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  condition: Condition;
  uv: number;
  daily_will_it_rain: boolean;
  daily_will_it_snow: boolean;
  daily_chance_of_rain: boolean;
  daily_chance_of_snow: boolean;
}

interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
}

interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: boolean;
  will_it_snow: boolean;
  is_day: boolean;
  vis_km: number;
  vis_miles: number;
  chance_of_rain: number;
  chance_of_snow: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
  short_rad: number;
  diff_rad: number;
  air_quality: AirQuality;
}

interface AirQuality {
  co: number;
  o3: number;
  no2: number;
  so2: number;
  pm2_5: number;
  pm10: number;
}

export interface ForecastDay extends Array<any>{
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  air_quality: AirQuality;
  hour: Hour;
}

export interface ForecastObj {
  forecastday: ForecastDay
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: boolean;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface CurrentWeather {
  location: Location;
  current: Current;
}

export interface Forecast {
  location: Location;
  current: Current;
  forecast: ForecastObj
}

export interface ForecastComponentProps {
  unit: number;
  handleUnitChange: any;
  forecast: ForecastObj
}