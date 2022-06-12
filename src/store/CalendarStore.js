import { makeAutoObservable } from 'mobx';

import { months } from '../Components/utils/consts';
import { getWeek } from '../Components/utils/functions';

class CalendarStore {
  _events = [];
  _selectedEvents = [];

  constructor() {
    this.setToday();

    makeAutoObservable(this);
  }

  setToday() {
    this._week = getWeek();
    this._month = months[new Date().getMonth()];
    this._year = new Date().getFullYear();
  }

  get events() {
    return this._events;
  }

  setEvent(cellTimestamp) {
    this._events = [...this._events, cellTimestamp];
  }

  setSelectedEvents(cellTimestamp) {
    if (this._selectedEvents.includes(cellTimestamp)) {
      return;
    }
    this._selectedEvents = [...this._selectedEvents, cellTimestamp];
  }

  removeSelectedEvents() {
    this._events = this._events.filter(event => !this._selectedEvents.includes(event));
    this._selectedEvents = [];
  }

  get selectedEvents() {
    return this._selectedEvents;
  }

  get week() {
    return this._week;
  }

  setNewDate(year, month, day) {
    const date = new Date(year, month, day);
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    this.setYear(date.getFullYear());
    this.setMonth(months[date.getMonth()]);
    this._week = getWeek(date, daysInMonth);
  }

  setWeek(direction) {
    if (direction === 'next') {
      if (this._week[this._week.length - 1]['Sun']) {
        const nextMonday = this._week[this._week.length - 1]['Sun'] + 1;
        this.setNewDate(this._year, months.indexOf(this._month), nextMonday);
      } else {
        this.setNewDate(this._year, months.indexOf(this._month) + 1, 1);
      }
    } else {
      if (this._week[0]['Mon']) {
        const prevSun = this._week[0]['Mon'] - 1;
        this.setNewDate(this._year, months.indexOf(this._month), prevSun);
      } else {
        this.setNewDate(this._year, months.indexOf(this._month), 0);
      }
    }
  }

  get month() {
    return this._month;
  }

  setMonth(month) {
    this._month = month;
  }

  get year() {
    return this._year;
  }

  setYear(year) {
    this._year = year;
  }
}

export default CalendarStore;