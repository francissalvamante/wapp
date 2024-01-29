export default function DateComponent() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();

  const padNumber = (num: number) => {
    let numStr = num.toString();

    return numStr.padStart(2, '0');
  }

  return (
    <>
      <p className="ml-8">{days[today.getDay()]}, <span className="text-gray-500">{`${padNumber(today.getHours())}:${padNumber(today.getMinutes())}`}</span></p>
    </>
  )
}