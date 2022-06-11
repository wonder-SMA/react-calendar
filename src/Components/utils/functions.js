import { months, weekDays } from './consts';

const currentDate = `${new Date(Date.now())}`.split(' ');

function getNormalNumber(number) {
  return (number < 10 ? '0' + number : number);
}

export function getCurrentDay() {
  return +currentDate[2];
}

export function getWeek() {
  const week = [{ Mon: 0 }, { Tue: 0 }, { Wed: 0 }, { Thu: 0 }, { Fri: 0 }, { Sat: 0 }, { Sun: 0 }];
  for (let i = 0; i < 7; i++) {
    week[i][weekDays[i]] = currentDate[2] - weekDays.indexOf(currentDate[0]) + i;
  }
  return week;
}

export function getMonth() {
  return currentDate[1];
}

export function getYear() {
  return currentDate[3];
}

export function getHours() {
  const hours = [];
  for (let i = 1; i < 24; i++) {
    hours.push(`${getNormalNumber(i)}:00`);
  }
  return hours;
}

export function getGrid(week = getWeek(), month = getMonth(), year = getYear()) {
  const grid = [];
  for (let i = 0; i < 24; i++) {
    const weekHours = [];
    for (let j = 0; j < 7; j++) {
      weekHours.push(Date.parse(
        `${year}` + '-' +
        `${months[month][0]}` + '-' +
        `${getNormalNumber(week[j][weekDays[j]])}` + 'T' +
        `${getNormalNumber(i)}:00:00`)
      );
    }
    grid.push(weekHours);
  }
  return grid;
}