import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {
      lat: '',
      lng: ''
    },
    error: {
      code: '',
      message: ''
    }
  });

  const onSuccess = (location: any) => {
    setLocation({
      ...location,
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }
    })
  }

  const onError = (err: any) => {
    setLocation({
      ...location,
      loaded: true,
      error: {
        code: err.code,
        message: err.message
      }
    })
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 500,
        message: 'Geolocation not supported!'
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });

  return location;
}