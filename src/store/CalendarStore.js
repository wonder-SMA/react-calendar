import { makeAutoObservable } from 'mobx';

import { getWeek, getMonth, getYear } from '../Components/utils/functions';

class CalendarStore {
  _week = getWeek();
  _month = getMonth();
  _year = getYear();
  _events = [];
  _selectedEvents = [];

  constructor() {
    makeAutoObservable(this);
  }

  get events() {
    return this._events;
  }

  setEvent(cellTimestamp) {
    this._events = [...this._events, cellTimestamp];
  }

  setSelectedEvents(cellTimestamp) {
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

  setWeek() {

  }

  get month() {
    return this._month;
  }

  setMonth() {

  }

  get year() {
    return this._year;
  }

  setYear() {

  }
}

export default CalendarStore;