import { convertDateToDay } from "@/_helpers/dateTimeHelper";
import { ForecastDay } from "@/_interfaces/weather";

interface DailyForecastComponentProps extends ForecastDay {
  unit: number;
}

export default function DailyForecastComponent(props: DailyForecastComponentProps) {
  return (
    <>
      <div className="w-[13%] bg-white flex flex-col -gap-2 p-[0.6rem] rounded-2xl">
        <p className="self-center">{convertDateToDay(props.date)}</p>
        <img src={props.day.condition.icon} alt="testalt" className="scale-50 -my-[15px]" />
        <p className="text-[0.7rem] self-center">{props.unit ? `${props.day.maxtemp_f}°` : `${props.day.maxtemp_c}°`} <span className="text-slate-500">{props.unit ? `${props.day.mintemp_f}°` : `${props.day.mintemp_c}°`}</span></p>
      </div>
    </>
  );
}