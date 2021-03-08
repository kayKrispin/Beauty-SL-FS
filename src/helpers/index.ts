type Day = {
  id: number;
  time: string | any;
  service: string;
};

type Days = Day[];

function generateOptions(length: any, end: any) {
  const arr = [];
  for (let value = length; value <= end; value++) {
    arr.push(value);
  }
  return arr;
}

export function calculateDayLoading(days: Days) {
  const parsedDays =
    days &&
    days.map((day: Day) => {
      if (!day.time) {
        return {};
      }

      const hourMinutesRange = [];

      const hour = day.time?.slice(0, -3);
      const minutes = day.time?.slice(3);

      let secondHour;
      let thirdHour;

      let timeee = parseInt(JSON.parse(day.service).timeToComplete);

      if (minutes === `30` && JSON.parse(day.service).timeToComplete === `1`) {
        for (let i = 0; i <= timeee; i++) {
          const hourMinuteObject = {
            hour: +hour + i,
            minutesRage:
              i === 0 ? generateOptions(0, 29) : generateOptions(30, 59),
          };

          hourMinutesRange.push(hourMinuteObject);
        }
      }

      if (JSON.parse(day.service).timeToComplete === `2`) {
        secondHour = +day.time?.slice(0, -3) + 1;
      }

      if (JSON.parse(day.service).timeToComplete === `3`) {
        secondHour = +day.time?.slice(0, -3) + 1;
        thirdHour = +day.time?.slice(0, -3) + 2;
      }

      return hourMinutesRange;
    });

  return parsedDays;
}
