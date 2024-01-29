function humidityLevels(humidity: number) {
  if (humidity >= 0 && humidity < 25) {
    return 'Too Dry'
  } else if (humidity >= 25 && humidity < 30) {
    return 'Dry'
  } else if (humidity >= 30 && humidity < 60) {
    return 'Normal'
  } else if (humidity >= 60 && humidity < 70) {
    return 'Humid'
  } else {
    return 'Too Humid'
  }
}

function pm2_5Levels(pm2_5: number) {
  if (pm2_5 >= 0 && pm2_5 <= 50) return 'Good'
  else if (pm2_5 >= 51 && pm2_5 <= 100) return 'Moderate'
  else if (pm2_5 >= 101 && pm2_5 <= 150) return 'Unhealthy for Sensitive Groups'
  else if (pm2_5 >= 151 && pm2_5 <= 200) return 'Unhealthy'
  else if (pm2_5 >= 201 && pm2_5 <= 300) return 'Very Unhealthy'
  else 'Hazardous'
}

async function fetchWeatherLocation(location: string) {
  const queryParams = new URLSearchParams({
    key: process.env.NEXT_PUBLIC_WEATHER_API_KEY as string,
    q: location,
    days: '7',
    aqi: 'yes'
  });

  let resp = await fetch(`
    ${process.env.NEXT_PUBLIC_WEATHER_API_URL}/forecast.json?${queryParams}`, {
    method: 'GET'
  })

  return await resp.json();
}

export {
  humidityLevels,
  pm2_5Levels,
  fetchWeatherLocation
}