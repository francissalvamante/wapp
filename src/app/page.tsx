"use client";

import { fetchWeatherLocation } from "@/_helpers/weatherHelper";
import { Forecast } from "@/_interfaces/weather";
import CurrentWeatherSection from "@/components/CurrentWeather";
import ForecastComponent from "@/components/ForecastComponent";
import useGeolocation from "@/hooks/useGeolocation"
import { SearchBox } from "@mapbox/search-js-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchLocation, setSearchLocation] = useState('');
  const [unit, setUnit] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState<Forecast>();
  const location = useGeolocation();

  useEffect(() => {
    const fetchWeather = async () => {
      const queryParams = new URLSearchParams({
        key: process.env.NEXT_PUBLIC_WEATHER_API_KEY as string,
        q: `${location.coordinates.lat},${location.coordinates.lng}`,
        days: '7',
        aqi: 'yes'
      });

      let resp = await fetch(`
        ${process.env.NEXT_PUBLIC_WEATHER_API_URL}/forecast.json?${queryParams}`, {
        method: 'GET'
      })

      const data: Forecast = await resp.json();

      setData(data);
      setLoaded(true);
    }

    if (location.loaded) {
      fetchWeather();
    }
  }, [location])

  const handleChange = (evt: any) => {
    setSearchLocation(evt.target.value);
  }

  const handleUnitChange = (unit: number) => {
    setUnit(unit);
  }

  const handleKeyDown = async (e: any) => {
    if (e.key === 'Enter') {
      let resp = await fetchWeatherLocation(e.target.value)
      
      console.log('resp', resp);

      setData(resp);
    }
  }

  return (
    <>
      {loaded ? 
        <div className="weather-container rounded-2xl border-2 border-solid border-transparent flex absolute m-auto left-0 right-0 top-0 bottom-0 w-5/6 h-5/6">
          <section className="w-[25%] h-full bg-white rounded-s-2xl">
            <CurrentWeatherSection data={data!} unit={unit} />
          </section>
          <section className="w-[75%] p-10 h-full bg-gray-custom rounded-e-2xl">
            <ForecastComponent unit={unit} handleUnitChange={handleUnitChange} forecast={data?.forecast!} />
          </section>
        </div> :
        <div className="w-full h-full bg-transparent flex flex-col justify-center items-center">
          <i className="fa-solid fa-cloud text-6xl text-white animate-wiggle"></i>
          <p className="text-xl">Looking outside to check the weather...</p>
        </div>
      }
    </>
  )
}