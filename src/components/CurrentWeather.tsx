'use client';

import { Forecast } from "@/_interfaces/weather";
import DateComponent from "./DateComponent";
import { useEffect, useState } from "react";

interface CurrentWeatherProps {
  data: Forecast,
  unit: number,
}

export default function CurrentWeatherSection(props: CurrentWeatherProps) {
  const [bgUrl, setBgUrl] = useState('');

  const {
    data,
    unit,
  } = props;

  const tempUnits = ['°C', '°F'];

  useEffect(() => {
    const fetchUnsplash = async () => {
      const queryParams = new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY as string,
        query: data?.location?.country as string
      })
  
      let resp = await fetch(`
        ${process.env.NEXT_PUBLIC_UNSPLASH_API_URL}?${queryParams}`, {
        method: 'GET'
      })
  
      const json: any = await resp.json();
  
      const randomIdx = Math.floor(Math.random() * json?.results?.length);
      setBgUrl(json?.results[randomIdx]?.urls?.small);
    }

    fetchUnsplash();
  })

  return (
    <>
      <div className="current-weather relative w-full h-full py-14">
        <img className="md:scale-200 sm:scale-150 mx-auto mt-8 mb-8" src={`${data?.current?.condition?.icon}`} alt={`${data?.current?.condition?.text}`} />
        <p className="text-5xl ml-8">
          {unit === 0 ? data?.current?.feelslike_c : data?.current?.feelslike_f}
          <span className="text-2xl align-super">{tempUnits[unit]}</span>
        </p>
        <DateComponent />
        <div className="absolute bottom-32 flex flex-col">
          <div className="condition flex items-center">
            <img className="ml-4 scale-50" src={`${data?.current?.condition?.icon}`} alt={`${data?.current?.condition?.text}`} />
            <p className="text-xs">{data?.current?.condition?.text}</p>
          </div>
          <div className="rain flex items-center -mt-7">
            <img className="ml-4 scale-50" src="//cdn.weatherapi.com/weather/64x64/day/176.png" alt={`${data?.current?.condition?.text}`} />
            <p className="text-xs">Rain - {data?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%</p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgUrl})`
          }}
          className="p-10 rounded-2xl w-4/5 left-1/2 -translate-x-1/2 h-16 bg-cover bg-center flex items-center align-middle justify-center absolute bottom-10">
            <p className="text-white md:text-lg sm:text-sm ">{`${data?.location?.region}, ${data?.location?.country}`}</p>
          </div>
      </div>
    </>
  );
}