import { ForecastComponentProps } from '@/_interfaces/weather';
import '@/styles/ForecastComponent.css';
import SevenDayForecast from './SevenDayForecast';
import GaugeComponent from 'react-gauge-component';
import HighlightsCard from './HighlightsCard';
import { humidityLevels, pm2_5Levels } from '@/_helpers/weatherHelper';

export default function ForecastComponent(props: ForecastComponentProps) {
  const {
    unit,
    handleUnitChange,
    forecast
  } = props;

  const styles = {
    transform: `rotate(${forecast?.forecastday[0]?.hour[0]?.wind_degree - 45}deg)`
  }

  return (
    <>
      <div className="w-full h-14 flex items-center justify-end">
        <div className="w-[9%] flex relative">
          <input type="radio" id="celsius" name="temperature" value={unit} onChange={() => handleUnitChange(0)} checked={unit === 0} className="peer appearance-none z-10" />
          <label htmlFor="celsius" style={{ color: !unit ? '#fff' : '#000' }} className="cursor-pointer w-1/2 flex items-center justify-center truncate uppercase select-none font-semibold z-20 text-lg rounded full py-2">°C</label>

          <input type="radio" id="fahrenheit" name="temperature" value={unit} onChange={() => handleUnitChange(1)} checked={unit === 1} className="peer appearance-none z-10" />
          <label htmlFor="fahrenheit" style={{ color: unit ? '#fff' : '#000' }} className=" cursor-pointer w-1/2 flex items-center justify-center truncate uppercase select-none font-semibold z-20 text-lg rounded full py-2">°F</label>

          <div className="w-1/2 flex items-center justify-center truncate uppercase select-none font-semibold text-lg rounded-[100%] p-0 h-full z-10 bg-black absolute transform transition-transform"></div>
        </div>
      </div>
      <div className="w-full">
        <SevenDayForecast forecastday={forecast?.forecastday} unit={unit} />
      </div>
      <div className="w-full h-14 mt-5">
        <p className="mb-3 text-3xl">Today's Highlights</p>
        <div className="flex flex-wrap gap-3">
          <HighlightsCard title="UV Index">
            <GaugeComponent
              arc={{
                subArcs: [
                  {
                    limit: 5,
                    color: '#5BE12C',
                    showTick: true,
                    tooltip: { text: 'Empty' }
                  },
                  {
                    limit: 8,
                    color: '#F5CD19',
                    showTick: true,
                    tooltip: { text: 'Low' }
                  },
                  {
                    limit: 12,
                    color: '#F58B19',
                    showTick: true,
                    tooltip: { text: 'Fine' }
                  },
                  {
                    limit: 15,
                    color: '#EA4228',
                    showTick: true,
                    tooltip: { text: 'Full' }
                  },
                ]
              }}
              value={forecast?.forecastday[0]?.day?.uv}
              minValue={0}
              maxValue={15}
              labels={{
                valueLabel: {
                  style: {
                    fill: '#000',
                    textShadow: 'unset'
                  }
                }
              }}
            />
          </HighlightsCard>
          <HighlightsCard title="Wind Status">
            <p className="text-4xl relative top-[45%] -translate-y-1/2">{forecast?.forecastday[0]?.hour[0]?.wind_kph}<span className="text-xl">km/h</span></p>
            <p className="-bottom-[55%] relative text-3xl"><i className='fa-solid fa-location-arrow' style={styles}></i> {forecast?.forecastday[0]?.hour[0]?.wind_dir}</p>
          </HighlightsCard>
          <HighlightsCard title="Sunrise & Sunset">
            <div className="h-full w-full flex flex-col justify-center px-5 pb-7">
              <p className="text-xl"><i className="fa-regular fa-circle-up text-yellow-500 mr-2"></i>{forecast?.forecastday[0]?.astro?.sunrise}</p>
              <p className="text-xl"><i className="fa-regular fa-circle-down text-orange-300 mr-2"></i>{forecast?.forecastday[0]?.astro?.sunset}</p>
            </div>
          </HighlightsCard>
          <HighlightsCard title="Humidity">
            <div className="h-full w-full pt-3">
              <p className="text-3xl">{forecast?.forecastday[0]?.hour[0]?.humidity}<span className="text-sm align-super">%</span></p>
              <p className="text-sm font-bold">{humidityLevels(forecast?.forecastday[0]?.hour[0]?.humidity)}</p>
            </div>
          </HighlightsCard>
          <HighlightsCard title="Visibility">
            <div className="h-full w-full pt-3">
              <p className="text-3xl">{forecast?.forecastday[0]?.hour[0]?.vis_km}<span className="text-sm">km</span></p>
            </div>
          </HighlightsCard>
          <HighlightsCard title="Air Quality">
            <div className="h-full w-full pt-3">
              <p className="text-3xl">
                {Math.round(forecast?.forecastday[0]?.day.air_quality.pm2_5 * 100) / 100}
                <span className="text-xs">μg/m<span className="align-super">3</span></span></p>
              <p className="text-sm">{pm2_5Levels(forecast?.forecastday[0]?.day.air_quality.pm2_5)}</p>
            </div>
          </HighlightsCard>
        </div>
      </div>
    </>
  )
}