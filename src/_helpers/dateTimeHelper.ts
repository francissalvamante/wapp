function convertDateToDay(date: string) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let d = new Date(date);

  return days[d.getDay()];
}

function convertTimeToMilitary(time: string) {
  let [timeSplit, period] = time.split(' ');
  let [hour, minute] = timeSplit.split(':');

  if (period === 'AM') {
    if (hour === '12') {
      return '00:' + minute;  
    }

    return timeSplit;
  } else {
    let convHour = 12 + parseInt(hour);

    return convHour.toString() + `:${minute}`;
  }
}

export {
  convertDateToDay,
  convertTimeToMilitary
}