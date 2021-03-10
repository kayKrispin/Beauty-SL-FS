type Day = {
  id: number;
  time: string | any;
  service: string;
};

type Days = Day[];

export function calculateDayLoading(days: Days) {
  const parsedDays =
    days &&
    days.map((day: Day) => {
      if (!day.time) {
        return {};
      }

      const hour = day.time?.slice(0, -3);
      let secondHour;
      let thirdHour;

      if (JSON.parse(day.service)?.timeToComplete === `2`) {
        secondHour = +day.time?.slice(0, -3) + 1;
      }

      if (JSON.parse(day.service)?.timeToComplete === `3`) {
        secondHour = +day.time?.slice(0, -3) + 1;
        thirdHour = +day.time?.slice(0, -3) + 2;
      }

      return {
        hour,
        secondHour,
        thirdHour,
      };
    });

  return parsedDays;
}
