import { months, weekDays } from './consts';

function checkDate(index, fullRefDate, daysInMonth) {
  let dayIndex = fullRefDate.getDay();
  const refDayIndex = dayIndex ? dayIndex - 1 : dayIndex + 6;
  const refDate = fullRefDate.getDate();
  const date = refDate - refDayIndex + index;
  if ((date < 0)
    || (date > daysInMonth)
    || (date > refDate && index < refDayIndex)
    || (date < refDate && index > refDayIndex)) {
    return 0;
  }
  return date;
}

export function getWeek(fullRefDate = new Date(), daysInMonth) {
  return weekDays.reduce((prev, value, index) => {
    return [...prev, {
      [value]: checkDate(index, fullRefDate, daysInMonth)
    }];
  }, []);
}

function getNormalNumber(number) {
  return (number < 10 ? '0' + number : number);
}

export function getHours() {
  const hours = [];
  for (let i = 1; i < 24; i++) {
    hours.push(`${getNormalNumber(i)}:00`);
  }
  return hours;
}

export function getGrid(week, month, year) {
  const grid = [];
  for (let i = 0; i < 24; i++) {
    const cells = [];
    for (let j = 0; j < 7; j++) {
      if (week[j][weekDays[j]]) {
        cells.push(Date.parse(
          `${year}` + '-' +
          `${getNormalNumber(months.indexOf(month) + 1)}` + '-' +
          `${getNormalNumber(week[j][weekDays[j]])}` + 'T' +
          `${getNormalNumber(i)}:00:00`)
        );
      }
    }
    grid.push(cells);
  }
  return grid;
}