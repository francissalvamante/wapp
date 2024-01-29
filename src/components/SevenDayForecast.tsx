import { ForecastObj } from "@/_interfaces/weather";
import DailyForecastComponent from "./DailyForecastComponent";

interface SevenDayForecastProps extends ForecastObj {
  unit: number;
}

export default function SevenDayForecast(props: SevenDayForecastProps) {
  const {
    forecastday,
    unit
  } = props;

  return (
    <>
      <div className="w-full flex flex-row flex-wrap gap-3 mt-4">
        {
          forecastday?.map((forecast, idx) => {
            return <DailyForecastComponent key={idx} {...forecast} unit={unit} />
          })
        }
      </div>
    </>
  );
} 