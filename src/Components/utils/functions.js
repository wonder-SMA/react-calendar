import { weekDays } from './consts';

export function getHours() {
  const hours = [];
  for (let i = 1; i < 24; i++) {
    hours.push(`${i < 10 ? '0' + i : i}:00`);
  }
  return hours;
}

export function getGrid() {
  const grid = [];
  for (let i = 0; i < 24; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      week.push(`${i < 10 ? '0' + i : i}-${i < 10 ? '0' + (i + 1) : (i + 1)}:${weekDays[j]}`);
    }
    grid.push(week);
  }
  return grid;
}

export const currentDate = `${new Date(Date.now())}`.split(' ');

export function getCurrentWeek() {
  const currentWeek = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
  for (let i = 0; i < 7; i++) {
    if (weekDays[i] !== currentDate[0]) {
      currentWeek[weekDays[i]] = currentDate[2] - weekDays.indexOf(currentDate[0]) + i;
    } else {
      currentWeek[weekDays[i]] = currentDate[2];
    }
  }
  return currentWeek;
}

export function getCurrentMonth() {
  return currentDate[1];
}

export function getCurrentYear() {
  return currentDate[3];
}